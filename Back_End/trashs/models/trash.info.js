var mongoose = require('mongoose');
mongoose.connect('mongodb://Medsayadi:med24071995@ds135384.mlab.com:35384/smart_trash_database',{useNewUrlParser: true});
var dataSchema = new mongoose.Schema({
    date_up:Date,
    trash_name:String,
    trash_capacity:String,
    trash_address:String,
    trash_lg:Number,
    trash_al : Number,
    trash_id:String,
    treatment_number : Number ,
    rubbish_weight : Number,
    start:Date,
    finish:Date,
    user_id:String,
    owner : String

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
module.exports = mongoose.model('trash_info', dataSchema);