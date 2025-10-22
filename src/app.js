import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';   


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})); //for middlewares we use app.use

app.use(express.json({limit: '16kb'})); // to parse json data from request body
app.use(express.urlencoded({extended: true,limit: '16kb'})); // to parse urlencoded data from request body
app.use(express.static("public"))
app.use(cookieParser()); // to parse cookies from request headers

export {app}