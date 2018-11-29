var mongoose = require('mongoose');
var Schema = mongoose.Schema;





var UserSchema = new Schema({
   
    email: {
        type: String,
        required: true
    },
    
    code:{type:Number},
    })
module.exports = mongoose.model('Verifcode', UserSchema);
