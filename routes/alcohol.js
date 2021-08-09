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
        res.json({
            "data": result
        })
    })
})

router.post('/create', (req, res, next) => {
    var data = {
        uid: req.query.uid,
        drink: req.query.drink,
        privacy: req.query.privacy
    }
    const sql = ''
    const params = [data.uid, data.drink]

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
router.post('/update', (req, res, next) => {
    var data = {}
    const sql = ''
    const params = []

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
    var data = {}
    const sql = ''
    const params = []

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