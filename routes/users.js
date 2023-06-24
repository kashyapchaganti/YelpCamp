const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const flash = require('connect-flash')
const { storeReturnTo } = require('../middleware');

router.get('/register', (req, res) => {
    res.render('users/register');
});
router.post('/register', catchAsync(async(req,res,next)=>{
    

       try{
            const {email, username, password} = req.body;
            const user = new User({username, email});
            const registeredUser = await User.register(user, password);
            req.login(registeredUser, err =>{
                if(err){
                    return next(err);
                }else{
                    req.flash('success', `Welcome ${username}`);
                    res.redirect('/campgrounds')
                }
            })
            

        }catch(e){
            req.flash('error',e.message);
            res.redirect('register')
        }
       


}))
router.get('/login', (req,res)=>{
    res.render('users/login')
})
// use the storeReturnTo middleware to save the returnTo value from session to res.locals\
// passport.authenticate logs the user in and clears req.session
// Now we can use res.locals.returnTo to redirect the user after login
// update this line to use res.locals.returnTo now
router.post('/login', storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),(req, res) => {
        req.flash('success', 'Welcome back!');
        const redirectUrl = res.locals.returnTo || '/campgrounds'; 
        res.redirect(redirectUrl);
    });

router.get('/logout', (req,res,next)=>{
    req.logOut(function (err){
        if(err){
            return next(err);
        }
    });
    req.flash('success', "Logged out successfully!");
    
    res.redirect('/campgrounds')

})

module.exports = router;