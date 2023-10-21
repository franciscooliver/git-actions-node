import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import createConnection from './database'
import dotenv from 'dotenv'
import { router } from "./routes/routes"

createConnection()
dotenv.config()

const port: any = process.env.PORT || 3000
const host = '0.0.0.0';
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

export { app, port, host }