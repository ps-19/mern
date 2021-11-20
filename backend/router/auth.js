const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("../db/connection");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from router js");
});

router.get("/about", (req, res) => {
    res.cookie('myFirstCookie','mnbvcxzlkjhgfdsapoiuytrewq');  // DEMO: sending simple cookie from GET
    res.send("Hello i am about page from router js");
});
router.post("/register", (req, res) => {
  if ( !req.body.name || !req.body.email || !req.body.phone || !req.body.work || !req.body.password || !req.body.cpassword ) {
    console.log("something is missing! " + req.body);
    return res.status(422).json({ message: "something is missing from the field" });
  }

  User.findOne({ email: req.body.email }).then((userExits) => {
      if (userExits) {
        return res.status(301).json({ message: "Email already registered!!" });
      }
      if (req.body.password !== req.body.cpassword) {
        return res.status(422).json({ error: "Password missmatched!" });
      }
      const user = new User(req.body);

      //hashing of password should be here

      user.save().then(() => {
          console.log("data is accepted");
          res.status(201).json({ message: "user registered successfully!" });
        }).catch((err) => {
          console.log("data not is accepted");
          res.status(502).json({ error: "Failed to save data in database!" });
        });
      console.log("Your inputted data: ");
      console.log(req.body);
    }).catch((err1) => {
      console.log(err1);
      return res.status(404).json({
          message: "something went wrong while finding email in database!!",
        });
    });
});

router.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    console.log("Either Email or Password is not provided");
    return res.status(203).json({ error: "invalid credentials" });
  }
  User.findOne({ email: req.body.email }).then((userLogin) => {
      console.log(userLogin);
      if (userLogin == null) {
        return res.status(400).json({ error: "Please register, your complete data do not exits" });
      }
      bcrypt.compare(userLogin.password,req.body.password).then(()=>{   // comparing hashed password
        const new_token = userLogin.generateAuthToken();         // creating a jwt(json web token) for current session
        console.log("I am returning new tokens formed during login "+ new_token);

        res.cookie("myFirstCookie", new_token, {                     // sending a new cookie
            expires: new Date(Date.now() + 360*1000000),
            httpOnly: true
        });

        return res.status(200).json({ message: "data found" });
      }).catch((err)=>{
        return res.status(398).json({ message: "password does not matched!" });
      })
    }).catch((err) => {
      return res.status(404).json({ error: "Please register, data do not exits" });
    });
});

module.exports = router;
