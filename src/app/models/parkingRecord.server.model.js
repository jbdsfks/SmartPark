var mongooose = require('mongoose'),
    Schema = mongooose.Schema;

var ParkingRecordSchema = new Schema({
    created:{
        type:Date,
        default:new Date
    },
    user:{
        type:Schema.ObjectId,
        ref:'User'
    },
    car:{
        type:Schema.ObjectId,
        ref:'Car'
    },
    park:{
        type:Schema.ObjectId,
        ref:'Park'
    },
    pay:{
        type:Number,
        required:true
    },
    carin:{
        type:String,
        default:''
    },
    carout:{
        type:String,
        default:''
    }
});

mongooose.model('ParkingRecord', ParkingRecordSchema);