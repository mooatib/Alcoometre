const router = require('express').Router()
const db = require('../db/db.js')

const groupbars = (data) => {
    const dataset = []
    for (var x = 1; x <= 10; x++) {
        var ns = 0, nb = 0, user = ''
        const userdataset = data.filter(function (e) {
            return e.uid == x
        })
        userdataset.map((element) => {
            if (element.type === '0')
                nb = element.n
            else
                ns = element.n
            user = element.username
        })
        dataset.push({ username: user, nbeers: nb, nstrong: ns })
    }
    return dataset
}

const grouprate = (data, step) => {
    const dataset = []
    for (var x = 1; x <= 10; x++) {
        const userdataset = data.filter(function (e) {
            return e.uid == x
        })
        dataset.push(buildDataSet(calcRate(userdataset, step), step))
    }
    return dataset
}

const calcRate = (data, step) => {
    const dataset = []
    data.map((element) => {
        if (!element.sex)
            sex = 0.6
        else
            sex = 0.7
        date = new Date(element.date)
        deg = (element.quantity * 10 * element.percentage / 100 * 0.8) / (sex * element.weight)
        dataset.push({ username: element.username, timestamp: date, rm: deg / step, ttl: 3600000 })
    })
    return dataset
}

const buildDataSet = (data, step) => {
    const dataset = []
    var now = new Date()
    var alcohol_grams = 0
    var rd = 0.1 / step
    var user = null
    for (let t = new Date().setDate(now.getDate()-1); t <= Date.parse(now); t += 3600000 / step) {
        data.forEach(element => {
            user = element.username
            if (t >= element.timestamp && element.ttl > 0) {
                alcohol_grams += element.rm
                element.ttl -= 3600000 / step
            }
        });
        alcohol_grams -= rd
        if (alcohol_grams < 0)
            alcohol_grams = 0
        const date = new Date(t)
        dataset.push({ user, alcohol_grams, d: date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + '\n' + date.getHours() + ":" + date.getMinutes() })
    }
    return dataset
}

router.get('/userrate', (req, res, next) => {
    var data = {
        uid: req.query.uid,
        step: req.query.step
    }
    const sql = `SELECT did, sex, weight, percentage, quantity, date from users
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid
                WHERE drinks.uid = ?`
    const params = [data.uid]
    db.all(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        const array = JSON.parse(JSON.stringify(result))
        const dataset = buildDataSet(calcRate(array, data.step), data.step)
        res.status(200).send(dataset)
    })
})

router.get('/grouprate', (req, res, next) => {
    var data = {
        step: req.query.step
    }
    const sql = `SELECT users.uid, username, sex, weight, did, percentage, quantity, date from users
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid
                ORDER BY drinks.uid ASC`
    const params = []
    db.all(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        const array = JSON.parse(JSON.stringify(result))
        const dataset = grouprate(array, data.step)
        res.status(200).send(dataset)
    })
})
router.get('/groupbars', (req, res, next) => {
    const sql = `SELECT users.uid, username,type, COUNT (did) AS n FROM users 
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid
                GROUP BY username, type`
    const params = []
    db.all(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        const array = JSON.parse(JSON.stringify(result))
        const dataset = groupbars(array)
        res.status(200).send(dataset)
    })
})


module.exports = router