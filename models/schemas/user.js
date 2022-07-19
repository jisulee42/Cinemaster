const { Schema } = require("mongoose")

const UserSchema = new Schema({
  id : {
    type : String,
    required : true,
  },
  password : String,
  email : String,
  Interest : String
},
{
  timestamps : true
})

module.exports = UserSchema