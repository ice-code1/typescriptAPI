import express from 'express'


import userRoutes from './routes/user.route'
import hotelRoutes from './routes/hotel.route'
import router from './routes/index.route'
import mongoose from 'mongoose'

const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/users',userRoutes)

app.use('/api/hotel',hotelRoutes)
app.use('/api/v3',router)
mongoose.connect(process.env.MONGODB_URI!)
.then(() => {
    console.log(" successfully connected to Database")
})
.catch(() => {
    console.log('there was an issue trying to connect to database')
})

const port = process.env.PORT || 3838

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})