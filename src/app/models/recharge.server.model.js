var mongooose = require('mongoose'),
    Schema = mongooose.Schema;

var RechargeSchema = new Schema({
    created:{
        type:Date,
        default:new Date
    },
    user:{
        type:Schema.ObjectId,
        ref:'User',
        required:true
    },
    money:{
        type:Number,
        required:true
    },
    Txtype:{
        type:String,
        required:true,
        default:"REC"
    }
});

mongooose.model('Recharge', RechargeSchema);