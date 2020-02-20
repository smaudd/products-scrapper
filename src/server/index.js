import { config } from 'dotenv'
import express from 'express'
import tasks from './tasks'
import cors from 'cors'

config()
const app = express()
const port = process.env.PORT
app.use(cors())

const server = app.listen(port, async () => {
    console.log(`Starting on port ${port}`)
    await tasks()
})

export default server