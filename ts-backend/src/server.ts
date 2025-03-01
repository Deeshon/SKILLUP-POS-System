import express, {json} from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.route'
import allRouter from './routes/all.route'


// configure env file
dotenv.config({path: './.env'})

const app = express();

app.use(json())
app.use(cookieParser());
app.use(morgan('combined'))
app.use('/api/auth', authRouter)
app.use('/api/all', allRouter)

app.get('/home', (req, res) => {
    res.json({message: "welcome to home"})
})



app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port: ${process.env.SERVER_PORT}`)
})