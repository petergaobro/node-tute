

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id })
}

const createTask = (req, res) => {
    res.send('create task')
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