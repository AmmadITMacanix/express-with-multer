import express from 'express'
import Router from './Routes/Users.js'
import connection from './MongoDB/connect.js';
import {config} from 'dotenv'
const app =express()
app.set(config())
app.use(connection)
app.use(express.json())
app.use(Router)
const PORT= process.env.PORT || 5000;
app.listen(PORT)





