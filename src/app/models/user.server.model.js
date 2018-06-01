var mongoose= require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    uid:  {
        type: String,
        trim: true,
        required: 'Username is required',
        unique: true
    },
    password: {
        type: String,
        validate: [
            function(password) {
                return password && password.length > 1;
            }, 'Password should be longer'
        ]
    },
    money:{
        type:Number,
        min:0,
        default:0.00
    },
    type:{
        type:String
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},

    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.virtual('fullName').get(function() {
    return this.username;
}).set(function(fullName) {
    this.username = fullName;
});

UserSchema.statics.findOneByUId = function (uid, callback) {
    // console.log(uid);
    this.findOne({ uid: new RegExp(uid, 'g') }, callback);
};
UserSchema.pre('save', function(next) {
    if (this.password && !this.salt) {
        this.salt = new
        Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});
UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'md5').toString('base64');
};
UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};
UserSchema.statics.findUniqueUserID = function(uid, suffix, callback) {
    var _this = this;
    var possibleUserID = uid + (suffix || '');
    _this.findOneByUId({
        uid: uid
    }, function(err, user) {
        if (!err) {
            if (!user) {
                callback(possibleUserID);
            } else {
                return _this.findUniqueUserID(uid, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};
UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});
mongoose.model('User', UserSchema);
