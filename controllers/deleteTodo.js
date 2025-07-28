const Todo = require('../models/Todo')

exports.deleteTodo = async (req , res) => {
    try{
        const id = req.params.id
        const todo = await Todo.findByIdAndDelete(id)

        if(!todo){
            return res.status(404).json({
                success : false,
                message : "Todo noy Found"
            })
        }

        res.status(200).json({
            success : true,
            data : todo,
            message : "Todo Deleted Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success : false,
            message : "Server Error"
        })
    }
    
}