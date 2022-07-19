const mongoose = require("mongoose")
const UserSchema = require("./schemas/user")

exports.User = mongoose.model("User", UserSchema); // model 함수 안에 Post는 collection 의 이름 정의