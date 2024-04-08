const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        min:3,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type:String,
        default: ''
    },
    coverPicture: {
        type:String,
        default: ''
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc:{
        type: String,
        max: 50,

    },
    city: {
        type: String,
        max: 50
    },
    from :{

        type: String,
        max: 50
    },
    relationship:{
        type: String,
        enum: ['1,2,3']
    }
  },
{timestamp: true})

module.exports = mongoose.model('restAPI2', User)