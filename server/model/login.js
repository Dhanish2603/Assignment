const mongoose = require("mongoose");
 
const videonum = new mongoose.Schema({
  username: {
    type: Number,
    required: true,
  }
});

const checker = mongoose.model("videonum", videonum);
module.exports = checker;
