const express = require('express')
const cors = require('cors')
const path = require.path
require('dotenv').config({path:'./config/.env' })

var corsOptions = {
    origin: ['http://81.250.83.25:3000', 'http://84.7.175.27:3000'],
    optionsSuccessStatus: 200,
    credentials: true
}

const app = express()

//Routes
const stats = require('./routes/stats')
const usersRoute = require('./routes/users')
const alcoholRoute = require('./routes/alcohol')
const drinksRoute = require('./routes/drinks')
const trophyRoute = require('./routes/trophy')
const userTrophyRoute = require('./routes/usertrophy')

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('client/build'))

app.use('/api/stats', stats)
app.use('/api/users', usersRoute)
app.use('/api/alcohol', alcoholRoute)
app.use('/api/drinks', drinksRoute)
app.use('/api/trophy', trophyRoute)
app.use('/api/usertrophy', userTrophyRoute)

//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`)
})