const router = require('express').Router()
const db = require('../db/db.js')


const calcRate = (data, step) => {
    const dataset = []
    data.map((element) => {
        if(!element.sex)
            sex = 0.6
        else
            sex = 0.7
        date = new Date(element.date)
        deg = (element.quantity * 10 * element.percentage/100 * 0.8) / (sex * element.weight)
        dataset.push({ timestamp: date, rm: deg/step, ttl: 3600000 })
    })
    return dataset
}
const buildDataSet = (dataset, step) => {
    const finaldataset = []
    var alcohol_grams = 0
    var rd = 0.1 / step

    for (let t = Date.parse('2021-08-12T10:14:36'); t <= Date.parse('2021-08-14T23:14:36'); t += 3600000 / step ){
        dataset.forEach(element => { 
            if (t >= element.timestamp && element.ttl > 0) {
                alcohol_grams += element.rm
                element.ttl -= 3600000 / step
            }
        });
        alcohol_grams -= rd
        if (alcohol_grams < 0)
            alcohol_grams = 0
    
        finaldataset.push({ alcohol_grams, d: new Date (t).toLocaleString()})
    }
    return finaldataset
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
        uid: req.query.uid
    }

    const sql = `SELECT did, sex, weight, percentage, quantity, date from users
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid`
    const params = [data.uid]
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