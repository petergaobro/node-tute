const express = require('express')
const router = express.Router();
const {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')


router.route('/').get(getAllTasks)
router.route('/:id').get(getSingleTask)
router.route('/create').post(createTask)
router.route('/update/:id').patch(updateTask)
router.route('/delete').delete(deleteTask)

module.exports = router;