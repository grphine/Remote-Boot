const express = require('express')
const router = express.Router()
const gpio = require('onoff').Gpio

const led = new gpio(17, 'out')
var val = 0; //initial value

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
        ledSwitch()
    res.send('pwr button push')
})

function ledSwitch(){
    switch (val){
        case 0:
            val = 1
            break
        case 1:
            val = 0
            break;
    }   

    
    led.writeSync(val)
    console.log(val)
}