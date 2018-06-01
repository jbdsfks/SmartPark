var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ParkSchema = new Schema({
    created:{
        type: Date,
        default: new Date()
    },
    parkname:{
        type: String,
        required: true,
        default:''
    },
    address:{
        type: String,
        required: true,
        default:''
    },
    price:{
        type: Number,
        required: true,
        default:0.00
    },
    phone:{
        type: String,
        required: true,
        default:''
    },
    carnum:{
        type: Number,
        default:0,
        required: true
    },
    freenum:{
        type: Number,
        default:0,
        required: true
    },
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    geoX:{
        type:Number,
        required:true
    },
    geoY:{
        type:Number,
        required:true
    }
});

mongoose.model('Park', ParkSchema);