const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    status:String
})

const UserDb = mongoose.model('userdb',schema)

module.exports = UserDb;