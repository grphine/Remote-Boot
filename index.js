//SECTION: imports
const express = require("express");
const app = express();
const createError = require("http-errors");
const fallback = require('connect-history-api-fallback')

const io = require('./io')


app.use(express.json());
app.use('/io', io)
app.use(fallback())  //app.use(fallback(__dirname + '/dist/app.html'))
app.use('/', express.static(__dirname + '/site/dist'))

app.listen(1233, ()=>{
    console.log('server start on port 1233')
})

app.use((req, res, next) => {
    next(createError(404));
});

app.use((req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
