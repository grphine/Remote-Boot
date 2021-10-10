const express = require('express')
const router = express.Router()

module.exports = router;

router.get("status", (req, res)=>{
    console.log('status requested')
    res.send(
        {
            status: 'current status',
            ip: 'ip addr'
        })
})

router.post('pwrBtn', (req, res)=>{
    console.log('power button pushed')
    res.send('pwr button push')
})