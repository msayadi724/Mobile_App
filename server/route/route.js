var express = require('express');
var app = module.exports = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/users');
var mqtt = require('mqtt');
var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Verifcode = require('../models/verifcode');
var crypto = require('crypto');
var Trush = require('../models/trush_info');


//sha512 function

var sha512 = function(password, salt){
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
      salt:salt,
      password:value
  };
};

//generer random string de taille N
var genRandomString = function(length){
  return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex') /** convert to hexadecimal format */
          .slice(0,length);   /** return required number of characters */
};

// register

app.post('/users/register', function (req, res) {
//var date= new Date();
if (!req.body.username || !req.body.email || !req.body.password  ) {
  return res.status(400).send({ "success": false, "result":'null', "msg": "remplire tous les champs" });}
else{

var salt = genRandomString(16); /** Gives us salt of length 16 */

var passwordData = sha512(req.body.password, salt);
     var newuser = new User({
  username: req.body.username,
  email: req.body.email,
  lat: req.body.lat,
  lon: req.body.lon,
  password: passwordData.password,
  salt: passwordData.salt,
      });
      console.log(newuser)
      newuser.save(function (err) {
  if (err) {
       console.log("some error: ", err);
       return res.json({ "success": false, "msg": "Error while creating user", "error": err });
     }
     res.status(201).send({ "success": true, "msg": 'Successful created new user.', "result": newuser });
   });
 
 
}})

//login

app.post('/users/login', function (req, res) {
   
  User.findOne({username: req.body.username}, function(err, user){
    if (err) {
      return res.json({ "success": false, "msg": "Error while creating users", "error": err });
    }
else{if(!user){

res.status(200).send({ "success": true, "msg": 'verifier username ou password', "result": 'null', "token": token });

}else{
 var token = jwt.sign({id: user._id}, "-----BEGIN RSA PRIVATE KEY-----\n"+config.privateKey+"\n-----END RSA PRIVATE KEY-----" ,{
             expiresIn: 86400,
              algorithm: "RS256"
          });

   var salt = user.salt;
    var passwordData = sha512(String(req.body.password), salt).password;
    console.log(req.body.password);
    console.log(passwordData);
    console.log(user.password);
    if(passwordData === user.password){

    

         console.log(token);
 res.status(200).send({ "success": true, "user_id": user._id, "token": token });
    }else{
      res.status(401).send({ "success": false, "result": 'null' });
    }
}}

 
  });
});





function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token,"-----BEGIN PUBLIC KEY-----\n"+config.publicKey+"\n-----END PUBLIC KEY-----", {algorithm: "RS256" }, function(err, decoded) {
    if (err) {
    
        return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});
    }
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

// generer token pour le tester
app.post('/token',function(req, res){
  User.findOne({username: req.body.username}, function(err, user){
var token = jwt.sign({id: user._id}, "-----BEGIN RSA PRIVATE KEY-----\n"+config.privateKey+"\n-----END RSA PRIVATE KEY-----" ,{
               expiresIn: 86400,
                algorithm: "RS256"
            });
             console.log(token);
res.status(200).send(token);
})
 })



// verifier le token
app.get('/verify', verifyToken , function (req, res, next) {

    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");

      res.status(200).send(user);
    });
});



app.get('/users', function(req,res){
  User.find({}, function(err, user){
    return res.json({'user':user});
  });
})


//////////////////////////////////////////////////////////// Add Trash ////////////////////////////////////////////////////////////////////////////
app.post('/Trashs/addTrash', function (req, res,err) {
 if(req.body){
  jwt.verify(req.body.token,"-----BEGIN PUBLIC KEY-----\n"+config.publicKey+"\n-----END PUBLIC KEY-----", {algorithm: "RS256" }, function(err, decoded) {
    if (err) {
      return res.json({ "success": false, "msg": "Token is not verified !!!!!", "error": err });
    }else{
      if (!req.body.trush_name || !req.body.trush_capacity || !req.body.trush_address  || !req.body.trush_id) {
        return res.status(400).send({ "success": false, "result":'null', "msg": "remplire tous les champs","err":err });
      }
         else {
           console.log(req.body);
      var newtrush = new Trush({
           trush_name : req.body.trush_name,
           trush_capacity: req.body.trush_capacity,
           trush_address:req.body.trush_address,
           trush_lg:req.body.trush_lg,
           trush_al:req.body.trush_al,
           trush_id : req.body.trush_id,
           treatment_number : req.body.treatment_number,
           rubbish_weight : req.body.rubbish_weight,
           user_id : req.body.user_id,
          });
      newtrush.save(function (err) {
          if (err) {
             console.log("some error: ", err);
             return res.json({ "success": false, "msg": "Error while creating this test", "error": err });
           }else{
            res.status(201).send({ "success": true, "msg": 'Successful created new test.', "result": newtrush });
       } });
      }
    }
  });
  }}); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////// get the trashs list ////////////////////////////////////////////////////////////////////////////////////////
app.post('/Trashs/loadTrashsdata', function(req, res){ 

  if (req.body) {
    console.log(req.body)
    jwt.verify(req.body.token,"-----BEGIN PUBLIC KEY-----\n"+config.publicKey+"\n-----END PUBLIC KEY-----", {algorithm: "RS256" }, function(err, decoded) {
      if (err) {
      return res.json({ "success": false, "msg": "Token is not verified !!!!!", "error": err });
     }else{
      Trush.find({user_id : req.body.user_id }).exec(function(err, data){
        if (err) {
         return res.json({ "success": false, "msg":  "Error while trying to load data", "error": err });
        }else if(data){
             res.status(200).send({"success": true, "result":data});
          } 
        else { 
          res.status(400).json({success: false, message: "Incorrect username/password"
      });
   
        }});
      
     }
   });
   
  
 
}}); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////// delete trash //////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/Trashs/deleteTrashdata', function(req, res){

  if(req.body){

    jwt.verify(req.body.token,"-----BEGIN PUBLIC KEY-----\n"+config.publicKey+"\n-----END PUBLIC KEY-----", {algorithm: "RS256" }, function(err, decoded) {
      if (err) {
      return res.json({ "success": false, "msg": "Token is not verified !!!!!", "error": err });
    }else{

      if (req.body) {
        console.log(req.body);
        Trush.remove({ _id : req.body.Iditem}).exec(function(err, data){
          if (err) {
           return res.json({ "success": false, "msg": "Item is not deleted !!", "error": err });
          }else {     
            
               res.status(200).send({"success": true, "msg":"Item deleted"}); 
            } 
          });
    
        
    }
    }
  });
   }}); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
