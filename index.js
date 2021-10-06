//SECTION: imports
const express = require("express");
const app = express();
const io = require('./io')

app.use(express.json());
app.use('/io', io)
app.use('/', express.static(__dirname + '/site'))

app.listen(1233, ()=>{
    console.log('server start on port 1233')
})

module.exports = app;
