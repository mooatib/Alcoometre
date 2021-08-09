const sqlite3 = require('sqlite3').verbose()
const dbname ='./db/alcoometre.db'

let db = new sqlite3.Database(dbname, (err) =>{
    if(err){
        console.error(err.message)
    }

    console.log('Connected to Alcoometre database')
})

module.exports = db