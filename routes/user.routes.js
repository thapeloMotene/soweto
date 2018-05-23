const router = require('express').Router();
//Getting access to the user model
const User = require('../models/User');

//creating a GET user endpoint
router.get('/users', function(req,res,next){
    //Function to get all users from a database that were created based on the UserSchema
User.find({}, function(err, foundUsers){
    //Checking for errors
    if (err) return next(err);
    //checking if it returned a result
    if (!foundUsers){
       return  res.json({message:"No users were found"})
    }
    //returning an array of users
    res.json(foundUsers);
});

});

router.post('/user', function(req,res,next){
    let user = new User();

    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.title = req.body.title;
    user.cellphoneNumber= req.body.cellphoneNumber;

    user.save(function(err,savedUser){
        if (err) return next(err);
        
                let obj = {
                    message:"User Successfully saved in the database",
                    user: savedUser
                }

                res.json(obj);
    });
});

//Request for getting a single Users 
router.get('/user/:id', function(req,res,next){
    User.findOne({_id:req.params.id}, function(err,foundUser){
        if (err) return next(err);
        res.json(foundUser);
    });

});


//Request to Update a User PUT
router.put('/user/:id', function(req,res,next){
    User.findById(req.params.id, function(err,foundUser){
        if (err) return next(err);

        if (req.body.firstname){
            foundUser.firstname= req.body.firstname;
        }
        if (req.body.lastname){
            foundUser.lastname= req.body.lastname;
        }
        if (req.body.email){
            foundUser.email= req.body.email;
        }
        if (req.body.title){
            foundUser.title= req.body.title;
        }
        if (req.body.cellphoneNumber){
            foundUser.cellphoneNumber= req.body.cellphoneNumber;
        }

        
        foundUser.save(function(err, updatedUser){
                if (err) return next(err);
                let obj = {
                    message:"user updated successfully",
                    updatedUser: updatedUser
                }

                res.json(obj)

        });
    
    });



});







module.exports = router;

