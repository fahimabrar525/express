const express = require('express');
const router = express.Router();


router.get('/register', (req, res)=>{
    res.send("get request at register page");
    res.end();
})
router.get('/about', (req, res)=>{
    res.send("get request at about page");
    res.end();
})
router.get('/login', (req, res)=>{
    res.send("get request at login page");
    res.end();
})

module.exports = router;
