const db = require('../../database');

class TaskController {
    async index(request, response){
        const tasks = await db.query(
            `SELECT * FROM tasks ORDER BY description ASC`
        );
        return response.json(tasks);
    }
    async filter(request, response){
        const {task_id} = request.params;
        const task = await db.query(
            `SELECT * FROM tasks WHERE task_id = $1`,[task_id]
        );
        return response.json(task);
    }
    async store(request, response){
        const {description, done, creator_id, created_at} = request.body;
        const new_task = await db.query(
            `INSERT INTO tasks (description, done, creator_id, created_at) VALUES ($1,$2,$3,$4)`,
            [description, done, creator_id, created_at]
        );
        return response.json(new_task);
    }
    async update(request, response){
        const {task_id} = request.params;
        const {description, done, creator_id, created_at} = request.body;

        const update_task = await db.query(`UPDATE tasks SET description = $2, 
                                                            done = $3, 
                                                            creator_id = $4, 
                                                            created_at = $5
                                            WHERE task_id = $1`, 
            [task_id, description, done, creator_id, created_at]
        );

        return response.json(update_task);
    }
    async delete(request,response){
        const {task_id} = request.params;
        const delete_task = await db.query(`DELETE FROM tasks WHERE task_id = $1`, [task_id]);
        return response.sendStatus(204);
    }
}
module.exports = new TaskController();