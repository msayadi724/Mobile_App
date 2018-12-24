var Trash = require('../models/trash.info');


exports.addTrash = (req, res) => {
    console.log(req.body)
    if (!req.body.trash_capacity || !req.body.trash_address  || !req.body.trash_id) {
        return res.status(400).send({ "success": false, "result":'null', "msg": "remplire tous les champs"});
      }
         else {
           
      var newtrash = new Trash({
           
           trash_capacity: req.body.trash_capacity,
           trash_address:req.body.trash_address,
           trash_lg:req.body.trash_lg,
           trash_al:req.body.trash_al,
           trash_id : req.body.trash_id,
           treatment_number : req.body.treatment_number,
           rubbish_weight : req.body.rubbish_weight,
           user_id : req.jwt.userId,
           owner : req.body.trash_owner
           
          });
          console.log(newtrash)
      newtrash.save(function (err) {
          if (err) {
             console.log("some error: ", err);
             return res.json({ "success": false, "msg": "Error while creating this test", "error": err });
           }else{
             res.status(201).send({ "success": true, "msg": 'Successful created new test.', "result": newtrash });
       } });
      }
};


exports.getallTrashs = (req, res) => {

  console.log(parseInt(req.jwt.roles))
if(parseInt(req.jwt.roles) == 1073741824){
    Trash.find({user_id : req.jwt.userId }).exec(function(err, data){
        if (err) {
         return res.json({ "success": false, "msg":  "Error while trying to load data", "error": err });
        }else if(data){
             res.status(200).send({"success": true, "result":data});
          } 
        else { 
             res.status(400).json({success: false, message: "Incorrect username/password"
             });
   
        }});}

        else{
            console.log(req.jwt)

            var codes = req.jwt.jti.toString().split('$');
            Trash.find({ owner : codes[0] }).exec(function(err, data){
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



}


exports.deleteTrash = (req, res) => {

    console.log( "ttttttttttttttttttttt")

    if (req.body) {
        console.log(req.body);
        Trash.remove({ _id : req.body.Iditem}).exec(function(err, data){
          if (err) {
           return res.json({ "success": false, "msg": "Item is not deleted !!", "error": err });
          }else {     
            
               res.status(200).send({"success": true, "msg":"Item deleted"}); 
            } 
          });
    
        
    }



}

