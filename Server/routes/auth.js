const express = require('express');
const User = require('../models/user');


const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User with same email already exist!!' });
    }

    let user = new User({
      email,
      password,
      name,
    });
    user = await user.save();
    res.json(user);

  } catch (e) {
    res.status(500).json({error:e.message});
  }

  //_v
  //id
  //String-->Object (Everything in javascript is object)
  //weak-password -6 character ,same account with email.....


  /*
    {
      'name':name,'email':email,'password':password
    }
   */

  //Get the data from the client 
  //post that data in database
  //return that data to the user
})

module.exports = authRouter;