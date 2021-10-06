const express = require('express')
const router = express.Router()

router.get("/on", (req, res)=>{
    console.log('on')
    res.send('on')
})