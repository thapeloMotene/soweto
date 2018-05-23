
//Requiring packages installed from NPM( Node Package Manager)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//getting end-point
const userRoutes = require('./routes/user.routes')
const articleRoutes = require('./routes/article.routes');

//Initialize express app
const app = express();

//connecting to remote mongodb instance
mongoose.connect('mongodb://app:pa55w0rd@ds231460.mlab.com:31460/soweto_oberserver_db', function(err){
    if (!err){
        console.log("database connection established successfully")
    }else{
        console.log('database connection unsuccessful')
    }
})

//adding functional middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//adding routes (Middle ware)
app.use(userRoutes);
app.use(articleRoutes);

app.get('/', function(req,res,next){
    res.json({response:"welcome to a json server"})
})



//server listening on port 2018 ( this makes the server live)
app.listen(2018, function(){
    console.log('server running on port 2018');
})



