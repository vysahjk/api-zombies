import dotenv from "dotenv";
dotenv.config()

const fs = require('fs');
import mongoose from 'mongoose';
mongoose.Promise = global.Promise

mongoose.connect( `${process.env.DATABASE}`, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useFindAndModify: false
})

import app from './app';
const http = require('http');

const httpServer = http.createServer(app);

httpServer.listen( `${process.env.PORT}`)