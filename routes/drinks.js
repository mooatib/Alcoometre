const router = require('express').Router()
const db = require('../db/db.js')

/* const time = []

const f = (list) =>{
    list.map((drink)=>{
        date = new Date(drink.date)
        deg = (drink.quantity*10*drink.percentage*0.8) / (0.7*drink.weight)
        time.push({"date": date, "alohol": deg})
    })
    console.log(time)
} */

router.get('/list', (req, res, next) => {
    const sql = `SELECT img, username, name, type, quantity, did, date from users
                JOIN drinks ON drinks.uid = users.uid
                JOIN alcohol ON drinks.aid = alcohol.aid`
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

router.get('/userlist', (req, res, next) => {
    var data = {
        uid: req.query.uid
    }

    const sql = `SELECT name, weight, type, percentage, quantity, date from users
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
        res.status(200).send(array)
    })
})

router.post('/add', (req, res, next) => {
    var data = {
        uid: req.query.uid,
        aid: req.query.aid,
        quantity: req.query.quantity
    }
    const sql = `INSERT INTO drinks (uid, aid, quantity, date) VALUES (?,?,?,DATETIME('now','localtime'))`
    const params = [data.uid, data.aid, data.quantity]

    db.run(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        res.json({
            "data": result
        })
    })
})

router.post('/delete', (req, res, next) => {
    var data = {
        did: req.query.did,
    }
    const sql = `DELETE FROM drinks WHERE did = ?`
    const params = [data.did]

    db.run(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        res.json({
            "data": result
        })
    })
})

module.exports = router