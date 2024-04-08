const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')

const userRoute = require('./route/user')
const authRoute = require('./route/auth')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('connected to mongo')
})

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

app.listen(8080, () => console.log('listening on'))