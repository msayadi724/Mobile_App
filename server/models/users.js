var mongoose = require('mongoose');
var Schema = mongoose.Schema;





var UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lat:{type:Number},
    lon:{type:Number},
    access:[],
    demande: [{message: String,owner: String, vue: String}],
    salt: {
        type: String,
        required: true
    },
    created_at: Date
});

UserSchema.pre('save', function (next) {
    var todo = this;
    // get the current date
    var currentDate = new Date();

    // if created_at doesn't exist, add to that field
    if (!todo.created_at) {
        todo.created_at = currentDate;
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);
