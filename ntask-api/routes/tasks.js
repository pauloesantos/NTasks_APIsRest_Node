module.exports = app => {
    app.get("/taskd", (req, res) => {
        res.json({
            task: [
                { title: "Realizar Compras" },
                { title: "Consetar o PC!"},
            ]
        });
    });
};