const mongoose = require('mongoose')

const totoSchema = new mongoose.Schema(
    {
        title:{
            type : String,
            required : true,
            maxLength : 50
        },
        description :{
            type : String,
            required : true,
            maxLength : 50
        },
        createAt :{
            type : Date,
            required : true,
            default : Date.now()
        },
        updatedAt :{
            type : Date,
            required : true,
            default : Date.now()
        }
    }
)

module.exports = mongoose.model("Todo" , totoSchema )