const express = require('express');
const { createHandler } = require('../controllers/createTodo');
const { getTodo, getTodoById } = require('../controllers/getTodo');
const { updateTodo } = require('../controllers/UpdateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');

const router = express.Router();

// import Controller


//define API routes

router.post('/createTodo' , createHandler);
router.get('/getTodos' , getTodo)
router.get('/getTodoById/:id' , getTodoById)
router.put('/updateTodo/:id' , updateTodo)
router.delete('/deleteTodo/:id' , deleteTodo)

module.exports = router;
