const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  fatherName: {
    type: String,
    required: true
  },
  motherName: {
    type: String,
    required: true
  },
  children: [{
    type: String,
    required: true
  }],
  childrenProfile: [{
    filename: String,
  }]
});

const familyModel = mongoose.model("familyProfile", familySchema);

module.exports = familyModel;