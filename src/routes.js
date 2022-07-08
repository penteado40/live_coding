const {Router} = require('express');

const router = Router();
const TaskController = require('./app/controllers/TaskController');

router.get('/tasks', TaskController.index);
router.get('/tasks/:task_id', TaskController.filter);
router.post('/tasks', TaskController.store);
router.put('/tasks/:task_id', TaskController.update);
router.delete('/tasks/:task_id', TaskController.delete);

module.exports = router;