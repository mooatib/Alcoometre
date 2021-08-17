const router = require('express').Router()
const db = require('../db/db.js')

const formatDate = (d) => {
    const date = new Date(d)
    const datestring = date.toISOString().split('T')[0] + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    return datestring
}

const f = (rate, username,) => {
    const sql = `UPDATE users SET alcohol = ? WHERE username = ?`
    const params = [username, rate]
    db.run(sql, params, (err,) => { })
}

const grouprate = (data, step, dateinit) => {
    const dataset = []
    for (var x = 1; x <= 10; x++) {
        const userdataset = data.filter(function (e) {
            return e.uid == x
        })
        dataset.push(buildDataSet(calcRate(userdataset, step), step, dateinit))
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

const buildDataSet = (data, step, dateinit) => {
    const dataset = []
    var alcohol_grams = 0
    var rd = 0.1 / step
    var user = null
    for (let t = dateinit; t <= Date.parse(new Date()); t += 3600000 / step) {
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
        alcohol_grams = Math.round((alcohol_grams + Number.EPSILON) * 100) / 100
        const date = new Date(t)
        dataset.push({ user, alcohol_grams, d: date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + '\n' + date.getHours() + ":" + date.getMinutes() })
    }
    f(user, alcohol_grams)
    return dataset
}

router.get('/userrate', (req, res, next) => {
    var data = {
        uid: req.query.uid,
        step: req.query.step,
        date: new Date().setDate(new Date().getDate() - 2)
    }
    const date = formatDate(data.date)
    const sql = `SELECT did, username, sex, weight, percentage, quantity, date from users
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid
                WHERE drinks.uid = ? AND date > ?`
    const params = [data.uid, date]
    db.all(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        const array = JSON.parse(JSON.stringify(result))
        const dataset = buildDataSet(calcRate(array, data.step,), data.step, data.date)
        res.status(200).send(dataset)
    })
})

router.get('/grouprate', (req, res, next) => {
    var data = {
        step: req.query.step,
        date: new Date().setDate(new Date().getDate() - 2)
    }
    const date = formatDate(data.date)
    const sql = `SELECT users.uid, username, sex, weight, did, percentage, quantity, date from users
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid
                WHERE date > ?
                ORDER BY drinks.uid ASC`
    const params = [date]
    db.all(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        const array = JSON.parse(JSON.stringify(result))
        const dataset = grouprate(array, data.step, data.date)
        res.status(200).send(dataset)
    })
})
router.get('/groupbars', (req, res, next) => {
    const sql = `SELECT username, COUNT (CASE type when '0' then 1 else null end) AS nb, COUNT (CASE type when '1' then 1 else null end) AS ns FROM users 
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid
                GROUP BY username
                ORDER BY users.uid ASC`
    const params = []
    db.all(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        const array = JSON.parse(JSON.stringify(result))
        res.status(200).send(array)
    })
})


module.exports = router