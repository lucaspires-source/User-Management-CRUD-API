const Userdb = require("../model/model");

//create user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //new user
  const user = Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  // save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          errr.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

//retrieve user
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
};

//update user

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "data to update cannot be empty" });
    return;
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot update user with ${id},maybe user is not found.`,
          });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating user info" });
    });
};

//delete user

exports.delete = (req, res) => {

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then((data) =>{
        if (!data) {
            res
              .status(404)
              .send({
                message: `Cannot delete user with ${id},maybe id is wrong.`,
              });
          } else{
            res.send({message:"User was deleted"})
          }
    })
    .catch((err) => {
        res.status(500).send({ message: "Error deleting user" });
      });
};
