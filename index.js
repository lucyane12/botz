const express = require('express');
const router = require('./router/router');
const botz = require('./bot');
const app = express();

app.use(router);
app.use(botz);
app.use(express.json());
app.set('json spaces',2);
app.listen(process.env.PORT || 3000);