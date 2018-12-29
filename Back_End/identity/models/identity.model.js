const mongoose = require('mongoose');
mongoose.connect('mongodb://Medsayadi:med24071995@ds135384.mlab.com:35384/smart_trash_database',{useNewUrlParser: true});
const Schema = mongoose.Schema;

const identiySchema = new Schema({
    username: String,
    email: String,
    password: String,
    permissionLevel: Number,
    owner_code : String,
    region_code : String
});

identiySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
identiySchema.set('toJSON', {
    virtuals: true
});

identiySchema.findById = function (cb) {
    return this.model('Users').find({id: this.id}, cb);
};

const Identity = mongoose.model('Users', identiySchema);


exports.findByEmail = (email) => {
    return Identity.find({email: email});
};
exports.findById = (id) => {
    return Identity.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createIdentity = (userData) => {
    const user = new Identity(userData);
    return user.save();
};

exports.list = (req,res,perPage, page) => {
    var codes = req.jwt.jti.toString().split('$');
    return new Promise((resolve, reject) => {
        Identity.find({permissionLevel: 1 , region_code : codes[1]})
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.putIdentity = (id,identityData , req , res) => {
    return new Promise((resolve, reject) => {
        Identity.findOneAndUpdate({_id :id},{owner_code : identityData.owner_code, region_code : identityData.region_code , 
        permissionLevel : identityData.permissionLevel},{new: true},function (err,user) {
            if (err) reject(err);
            resolve(user);
            console.log(user)
            res.status(204).send({user :user});
        });
    });
};

exports.patchIdentity = (id, userData) => {
    return new Promise((resolve, reject) => {
        Identity.findById(id, function (err, user) {
            if (err) reject(err);
            let actualPermisssion = user.permissionLevel;
            for (let i in userData) {
                user[i] = userData[i];
            }
            user.permissionLevel = actualPermisssion;
            user.save(function (err, updatedUser) {
                if (err) return reject(err);
                resolve(updatedUser);
            });
        });
    });

};

exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        Identity.remove({_id: userId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

