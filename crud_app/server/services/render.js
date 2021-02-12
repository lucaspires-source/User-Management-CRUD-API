const axios = require('axios');



exports.homeRoutes = ( req,res) =>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index',{users:response.data})
    })
    .catch(err =>{
        response.send(err)
    })
}

exports.update_user = ( req,res) =>{
    res.render('update_user');
}

exports.add_user = ( req,res) =>{
    res.render('add_user');
}