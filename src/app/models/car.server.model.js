var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarShema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    carId:{
        type:String,
        required:true
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
}, {versionKey: false});

mongoose.model('Car', CarShema);