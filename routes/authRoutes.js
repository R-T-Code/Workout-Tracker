const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');

// Route setup in external file
/*
    * @route POST /api/auth/register
    * @access public
    * desc register new user
*/
router.post('/api/auth/register', async(req, res) => {
    // Search if user exists (findOne find one object)
    let user = await User.findOne({email: req.body.email.toLowerCase()});
    // Check if user exists
    if(user) return res.status(400).send('that user exists'); // user return (otherwise the function will continue);

   
    const {name, email, password} = req.body; // Destructuring
    // create hashed password
    const hash = await bcrypt.hash(password, 10) // 10 -> salt rounds
    user = new User({name, email, password:hash});
    await user.save();


    // if all ok, send JWT
    user = _.omit(user.toJSON(), ['password', '__v']); //omit pass and __v
    const token = jwt.sign(user, process.env.JWT_KEY);
    // send token to user
    res.send(token);
});

/*
    * @route POST /api/auth/login
    * @access public
    * desc login user
*/
router.post('/api/auth/login', async (req, res) => {
    // find user by email
    let user = await User.findOne({email: req.body.email.toLowerCase()});
    // if no user, return 404 status
    if(!user) return res.status(404).send('user not found');
    // if user exists, compare user's password with DB password
    const match = await bcrypt.compare(req.body.password, user.password);
    // if wrong password, send 400
    if(!match) return res.status(400).send('incorrect password');
    // if all ok, send JWT
    user = _.omit(user.toJSON(), ['password', '__v']); //omit pass and __v
    const token = jwt.sign(user, process.env.JWT_KEY);
    // send token to user
    res.send(token);
});

// route with authentication
router.get('/api/auth/users',auth, async(req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;