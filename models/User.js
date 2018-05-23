const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname:String,
    lastname:{type:String, default:'no surname'},
    email:{type:String, unique:true},
    picture:String,
    blogUrl:String,
    title:String,
    cellphoneNumber:{type:String, unique:true },
    isAuthor:{type: Schema.Types.Boolean, default:false},
    isAdmin:{type:Boolean, default:false}
})

module.exports = mongoose.model("User", UserSchema);

