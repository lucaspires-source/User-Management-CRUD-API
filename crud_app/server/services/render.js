exports.homeRoutes = ( req,res) =>{
    res.render('index')
}

exports.update_user = ( req,res) =>{
    res.render('update_user');
}

exports.add_user = ( req,res) =>{
    res.render('add_user');
}