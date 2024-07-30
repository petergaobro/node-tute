const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id })
}

const createTask = async(req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const updateTask = (req, res) => {
    res.json({ id: req.params.id })
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}