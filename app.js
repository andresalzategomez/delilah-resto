const express = require('express')
const helmet = require('helmet')
const sequelize = require('./conexion')
const bodyParser = require('body-parser')
const cors = require('cors')
const port  = 3000


//routes
const authRoute = require('./routes/auth.routes')
const usersRoute = require('./routes/users.routes')
/* const mealsRoute = require('./routes/meals.routes')
const orderRoute = require('./routes/orders.routes') */

const app = express()
app.use(helmet())
app.use(cors())

// cambiar body-parser por express.bodyparser 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())


app.use('/v1/api/auth', authRoute)
app.use('/v1/api/users', usersRoute)
/* app.use('/v1/api/meals', mealsRoute)
app.use('/v1/api/orders', orderRoute) */

app.listen(port , () =>{
    console.log("Servidor iniciado en puerto: " + port)
})

module.exports = app