const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArticleSchema= new Schema({
    "title":String,
    "picture":String,
    "datePosted":{type:Date, default: Date.now()},
    "author":{type:Schema.Types.ObjectId,ref:'User'},
    "body":String
})


module.exports = mongoose.model('Article', ArticleSchema);