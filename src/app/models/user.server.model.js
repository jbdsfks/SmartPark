var mongoose= require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    email: String,
    uid:  {
        type: String,
        trim: true,
        unique: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});
UserSchema.statics.findOneByUId = function (uid, callback) {
    this.findOne({ uid: new RegExp(uid, 'g') }, callback);
};
mongoose.model('User', UserSchema);