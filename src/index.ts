import express from "express";
import http from "http";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import compression from 'compression'
import cors from 'cors'
import 'dotenv/config'
import mongoose from "mongoose";
import router from "./router";
// installation commands:
// npm install express body-parser cookie-parser compression cors
// npm install @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors
// Installation for middlewares:
// npm i lodash
// npm i -D @types/lodash

const app = express()

app.use(cors({
    credentials:true
}
))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080,()=> console.log("Server running on http://localhost:8080/")) //open http://localhost:8080/

const MONGO_URI = process.env.MONGO_URI

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on(`error`,(error: Error) => console.log(error));

app.use('/',router())
