const router = require('express').Router()
const db = require('../db/db.js')

router.post('/register', (req, res, next) => {
    var data = {
        username: req.query.username,
        weight: req.query.weight,
        resistance: req.query.resistance
    }
    const sql = `INSERT INTO users (username, weight, resistance) VALUES (?,?,?)`
    const params = [data.username, data.weight, data.resistance]
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

router.post('/login', (req, res, next) => {
    var data = {
        username: req.query.username,
    }
    const sql = `SELECT users.password FROM users WHERE email = ?`
    const params = [data.email]
    db.get(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        if(bcrypt.compareSync(data.password, JSON.parse(JSON.stringify(result)).password)){
            res.json({
                "data": "oui"
            })
        }else{
            res.json({
                "data": "non"
            })
        }
    })
})

module.exports = router