const express = require('express')
const router = express.Router()

module.exports = router;

router.get("/on", (req, res)=>{
    console.log('on')
    res.send('on')
})

