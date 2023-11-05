const mongoose = require("mongoose")

const form1 = new mongoose.Schema({
    category:[String],
    items:[String],
    BelongsTo:[String],
})


const form2 = new mongoose.Schema({
    sentence:String,
    option:[String]
})

const form3 = new mongoose.Schema({
    comphrension:String,
    sentence:[form2]
})

const completeform = new mongoose.Schema({
    type1:[form1],
    type2:[form2],
    type3:[form3]
})


