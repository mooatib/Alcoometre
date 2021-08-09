const router = require('express').Router()
const db = require('../db/db.js')

router.get('/list', (req, res, next) => {
    const sql = `SELECT * FROM drinks`
    const params = []
    db.all(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        res.json({
            "data": result
        })
    })
})

router.get('/userDrinks', (req, res, next) => {
    var data = {
        uid: req.query.uid
    }
    const sql = `SELECT * FROM alcohol WHERE uid = ?`
    const params = [data.uid]
    db.all(sql, params, (err, result) => {
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