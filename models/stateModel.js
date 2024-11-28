const mongoose = require('mongoose');

const stateSchema = mongoose.Schema({
    
    temperature: {
        type : String,
        required: [true,"Please add the temperature"],
    },
    pressure:{
        type : String,
        required: [true,"Please add the pressure"],
    },
    depth: {
        type : String,
        required: [true,"Please add the depth"],
    }
    // },
    // id:{
    //     type: Number,
    //     default :1,
    //     required: [true, "Please add the ID"]
    // }
},{
    timestamps : true,
});

module.exports = mongoose.model("State", stateSchema);