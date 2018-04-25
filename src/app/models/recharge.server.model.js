var mongooose = require('mongoose'),
    Schema = mongooose.Schema;

var RechargeSchema = new Schema({
    created:{
        type:Date,
        default:new Date
    },
    user:{
        type:Schema.ObjectId,
        ref:'User'
    },
    money:{
        type:Number,
        required:true
    }
});

mongooose.model('Recharge', RechargeSchema);