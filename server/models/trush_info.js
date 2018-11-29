var mongoose = require('mongoose');
var dataSchema = new mongoose.Schema({
    date_up:Date,
    trush_name:String,
    trush_capacity:String,
    trush_address:String,
    trush_lg:Number,
    trush_al : Number,
    trush_id:String,
    treatment_number : Number ,
    rubbish_weight : Number,
    start:Date,
    finish:Date,
    user_id:String,

} );
dataSchema.pre('save', function (next) {
    var todo = this;
    var currentDate = new Date();
    if (!todo.date_up) {
        todo.date_up = currentDate;
        todo.start = currentDate;
        todo.finish = currentDate;
    }
    next();
} );
module.exports = mongoose.model('trush_info', dataSchema);
