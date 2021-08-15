const router = require('express').Router()
const db = require('../db/db.js')

const group = (data, step) =>{
    const dataset = []
    for(var x = 1; x <= 10; x++){
        const userdataset = data.filter(function(e){
            return e.uid == x
        })
        dataset.push(buildDataSet(calcRate(userdataset, step),step))
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
        dataset.push({username: element.username, timestamp: date, rm: deg / step, ttl: 3600000 })
    })
    return dataset
}

const buildDataSet = (data, step) => {
    const dataset = []
    var alcohol_grams = 0
    var rd = 0.1 / step
    var user = null
    for (let t = Date.parse('2021-08-14T14:14:36'); t <= Date.parse(new Date()); t += 3600000 / step) {
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
        dataset.push({user, alcohol_grams, d: date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + '\n' + date.getHours() + ":" + date.getMinutes() })
    }
    return dataset
}

router.get('/user', (req, res, next) => {
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

router.get('/group', (req, res, next) => {
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
        const dataset = group(array, data.step)
        res.status(200).send(dataset)
    })
})


module.exports = router