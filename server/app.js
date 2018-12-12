const express = require('express');
const http = require('http');
const userRouter = require('./user');
const bodyParser = require('body-parser');
//连接model
const model = require('./model');
const app = express();
const server = http.Server(app);
app.use(bodyParser.json());
app.use('/user',userRouter);
server.listen(8888, () => console.log('Example app listening on port 8888!'));



