var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarShema = new Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    type:{
        type: String,
        default:''
    },
    model:{
        type: String,
        default:''
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