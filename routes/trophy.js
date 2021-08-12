const router = require('express').Router()
const db = require('../db/db.js')

router.get('/list', (req, res, next) => {
    const sql = 'SELECT * FROM trophy'
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
        description: req.query.description,
        emoji: req.query.emoji
    }
    const sql = `INSERT INTO trophy (name, description, emoji) VALUES (?,?,?)`
    const params = [data.name, data.description, data.emoji]

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
        tid: req.query.tid,
    }
    const sql = `DELETE FROM trophy WHERE tid = ?`
    const params = [data.tid]

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