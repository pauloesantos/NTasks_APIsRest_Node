module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        logging: console.log,
        define: {
            underscored: true
        }
    },
    jwtSecret: "Ntas$k_AP1",
    jwtSession: { session: false }
};