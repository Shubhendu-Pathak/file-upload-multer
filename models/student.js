let mongoose = require('mongoose')
let Schema = mongoose.Schema

let studentSchema = new Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    photo:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('Student', studentSchema)