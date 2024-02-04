const express = require('express')
const cors = require('cors')
const app = express()
const {db} = require('./db/db.js')

require('dotenv').config()

const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use(cors())


const server= () => {
    db()
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)
    })

}
server()