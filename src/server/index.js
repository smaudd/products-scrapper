import { config } from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import tasks from './tasks'
import Task from 'models/Task.model'
import Product from 'models/Product.model'

import cors from 'cors'

config()
const app = express()
const port = process.env.PORT
app.use(cors())

app.get('/find', async (req, res) => {
    const result = await Product.findOne({ ...req.query })
    console.log(result)
    res.send(result)
})


const server = app.listen(port, () => {
    console.log('Starting...')
    mongoose.connect(process.env.MONGO_STRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    );
})

const db = mongoose.connection;

db.on('err', err => console.log(err))
db.once('open', async (err) => {
    if (err) console.log(err)
    console.log(`Server started & DB connected. ${port}`)
    if (process.env.LOCALHOST) {
        await tasks()
    }
})

export default server