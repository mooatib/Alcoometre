const router = require('express').Router()
const db = require('../db/db.js')

router.get('/list', (req, res, next) => {
    const sql = 'SELECT * FROM users'
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

router.get('/info', (req, res, next) => {
    var data = {
        uid: req.query.uid
    }
    const sql = 'SELECT * FROM users WHERE uid = ?'
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
router.post('/updaterate', (req, res, next) => {
    var data = {
        rate: req.query.alcohol,
        username: req.query.username
    }
    const sql = `UPDATE users SET alcohol = ? WHERE username = ?`
    const params = [data.rate, data.username]

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