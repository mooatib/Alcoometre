const router = require('express').Router()
const db = require('../db/db.js')

router.get('/list', (req, res, next) => {
    const sql = `SELECT * FROM alcohol`
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

router.post('/add', (req, res, next) => {
    var data = {
        name: req.query.name,
        type: req.query.type,
        percentage: req.query.percentage
    }
    const sql = `INSERT INTO alcohol (name, type, percentage) VALUES (?,?,?)`
    const params = [data.name, data.type, data.percentage]

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
        aid: req.query.aid
    }
    const sql = `DELETE FROM alcohol WHERE aid = ?`
    const params = [data.aid]

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