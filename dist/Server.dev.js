"use strict";

//'node Server.js'
//This is the server file, it will handle all requests and responses
//Server configuration
var port = 8082; // 80, 443, 8082 nginx

var express = require('express');

var app = express();

var logs = require('./modules/logger');

var database = require('./modules/database');

app.listen(port, function () {
  try {
    logs.initalize(); //initalize logger

    logs.info('Server starting'); //log server start

    logs.info('Running on port ', port);
    logs.info('Process ID: ', process.pid);
    logs.info('Process path: ', process.cwd());
    database.initalize(); //initalize database
  } catch (error) {
    logs.error('Catastrophy on server start: ', error);
  }
}); //Listen for requests, this starts the server
//bind root path to /www folder

app.use(express["static"]('www')).listen(function () {});
app.get('/get/test', function (req, res) {
  //test get
  try {
    logs.info('test get');
    req.on('data', function (data) {
      logs.info('got: ', data);
      res.end(JSON.stringify({
        testget: "test get data received"
      }));
    }); //res.writeHead(200, { 'Content-type': 'application/json' });

    res.send(JSON.stringify({
      test: 'test get is okay'
    }));
  } catch (error) {
    logs.error('Catastrophy on test get: ', err);
  }
});
app.post('/post/test', function (req, res) {
  //test post
  //receive more data than a get
  try {
    logs.info('test post to server');
    req.on('data', function (data) {
      logs.info('Posted : ', JSON.parse(data));
      res.end(JSON.stringify({
        test: "test post received"
      }));
    });
  } catch (error) {
    logs.error('Catastrophy on test post: ', err);
  }
});