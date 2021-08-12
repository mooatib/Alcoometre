const router = require('express').Router()
const db = require('../db/db.js')

router.get('/list', (req, res, next) => {
    var data = {
        uid: req.query.uid
    }
    const sql = `SELECT name, trophy.name, description, emoji from users
                JOIN trophy ON trophy.uid = users.uid
                WHERE trophy.uid = ?`
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
        tid: req.query.tid
    }
    const sql = `INSERT INTO usertrophy (uid, tid, date) VALUES (?,?,DATETIME('now','localtime'))`
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
    const sql = `DELETE FROM usertrophy WHERE tid = ?`
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