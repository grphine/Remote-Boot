//SECTION: imports
var express = require("express");
var app = express();

app.use(express.json());
app.use('/', express.static(__dirname + '/site'))

app.listen(1233, ()=>{
    console.log('server start on port 1233')
})

module.exports = app;
