import express, { json } from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import morgan from 'morgan';
import cookieParser from 'cookie-parser'

// configure env file
dotenv.config({path: './.env.local'})

const app = express();

app.use(json());
app.use(cookieParser())
app.use(morgan('combined'))
app.use('/api/auth', authRouter)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port: ${process.env.SERVER_PORT}`)
})