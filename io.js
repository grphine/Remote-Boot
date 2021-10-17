const express = require('express')
const router = express.Router()
const gpio = require('onoff').Gpio

const led = new gpio(17, 'out')
var val = 1; //initial value

module.exports = router;

router.get("/status", (req, res)=>{
    console.log('status requested')
    res.send(
        {
            status: 'current status',
            ip: 'ip addr'
        })
})

router.post('/pwrBtn', (req, res)=>{
    console.log('power button pushed')
    led.writeSync(val)
    res.send('pwr button push')
})