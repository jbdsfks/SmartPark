var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarShema = new Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    color: {
        type:String,
        default:''
    },
    brand:{
        type: String,
        default:''
    },
    owner:{
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Car', CarShema);