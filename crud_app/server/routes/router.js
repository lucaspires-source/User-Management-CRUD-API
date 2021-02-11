const express = require('express')
const route = express.Router()
const services = require('../services/render')

/** 
*@descripition Root Route
*@method GET/
*/

route.get('/', services.homeRoutes)


/** 
*@descripition Add User
*@method GET/
*/

route.get('/add-user', services.add_user)


/** 
*@descripition Update User
*@method GET/
*/
route.get('/update-user', services.update_user)

module.exports=route;