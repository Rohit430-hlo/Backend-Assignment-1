const { response } = require('express')
const Todo = require('../models/Todo')


exports.updateTodo = async (req , res) => {
    try{
        const id = req.params.id;
        const {title , description} = req.body
        const todo = await Todo.findByIdAndUpdate(id , {title , description , updatedAt : Date.now()} , {new : true} )
        if(!todo){
            return res.status(404).json({
                success : false,
                message : "Todo not Found"
            })
        }
        res.status(201).json({
            success : true,
            data : todo,
            message : "Data Updated Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success : false,
            data : "server error"
            
        })
    }
}