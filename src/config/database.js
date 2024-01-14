//Configuração do Data base

module.exports = {
    dialect:'mysql',
    host: 'localhost',
    username:'root',
    password:'123irineu',
    database: 'nodecrud',
    define:{
        timestamps: true,
        underscored: true,
    }
}