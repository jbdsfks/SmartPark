var mongooose = require('mongoose'),
    Schema = mongooose.Schema;

var RechargeSchema = new Schema({
    created:{
        type:Date,
        default:Date.now
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
    },
    Date:{
        type:String,
        required:true
    }
});

mongooose.model('Recharge', RechargeSchema);