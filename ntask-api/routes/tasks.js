module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
        .all(app.auth.authenticate())
        .get((req, res) => {
            // "tasks": Listar tarefas
            Tasks.findAll({
                where: { User_id: req.user.id }
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        .post((req, res) => {
            // "tasks": cadastrar uma nova tarefa
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });
    app.route("/tasks/:id")
        .all(app.auth.authenticate())
        .get((req, res) => {
            // "tasks/1": Consulta uma tarefa
            Tasks.findOne({
                where: {
                    id: req.params.id,
                    user_id: req.user.id
                }
            })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStstus(404);
                    }
                })
                .cacth(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        .put((req, res) => {
            // "tasks/1": Atualiza uma tarefa
            Tasks.update(req.body, {
                where: {
                    id: req.params.id,
                    user_id: req.user.id
                }
            })
                .then(resulta => res.sendStstus(204))
                .cacth(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        .delete((req, res) => {
            // "tasks/1": Exclui uma nova tarefa
            Tasks.destroy({
                where: {
                    where: {
                        id: req.params.id,
                        user_id: req.user.id
                    }
                }
            })
                .then(result => res.sendStstus(240))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });
};