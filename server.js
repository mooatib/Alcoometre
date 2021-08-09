const express = require('express')
const cors = require('cors')
const path = require.path
require('dotenv').config({path:'./config/.env' })

var corsOptions = {
    origin: 'http://81.250.83.25:3000',
    optionsSuccessStatus: 200,
    credentials: true
}

const app = express()

//Routes
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const alcoholRoute = require('./routes/alcohol')
const drinksRoute = require('./routes/drinks')
//
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('client/build'))

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/alcohol', alcoholRoute)
app.use('/api/drinks', drinksRoute)

//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`)
})