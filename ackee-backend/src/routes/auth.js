// try {
//     const express = require('express').Router();
//     var router = new express.Router()
//     const passport = require('passport');
//     console.log(router)
    
//     router.get('/', passport.authenticate('discord')).
//     router.get('/redirect', passport.authenticate('discord', { 
//         failureRedirect: 'http://localhost:3000/forbidden',
//         successRedirect: 'http://localhost:3000/'
//     })); 

//     module.exports = router
//     } catch (err) {
//     //    console.log(err)
//     }