const router = require('express').Router();
//Getting access to the user model
const Article = require('../models/Article');

router.get('/articles', function(req,res,next){


    // Article.find({}, function(err, foundArticle){
    //     if (err) return next(err);
    //     res.json(foundArticle);
    // })

    Article.find({})
    .populate('author')
    .exec(function(err, foundArticle){
        if (err) return next(err);
        res.json(foundArticle);
    })


});

router.post('/article', function(req,res,next){
    let newArticle = new Article(req.body);

    newArticle.save(function(err,savedArticle){
        if (err) return next(err);

        res.json(savedArticle);
    })
});




module.exports= router;
