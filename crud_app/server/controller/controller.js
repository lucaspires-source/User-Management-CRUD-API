const Userdb = require('../model/model')

//create user
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"})
        return;
    }

    //new user
    const user = Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status,
    })
    // save user in the database
    user
        .save(user)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({message:errr.message || "Some error occurred while creating a create operation"})
        })
}

//retrieve user
exports.find = (req,res) =>{
    
}

//update user

exports.update = (req,res) =>{
    
}

//delete user

exports.delete= (req,res) =>{
    
}