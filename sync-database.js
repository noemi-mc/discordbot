const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('discordbot', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

//require('./models/tictactoe.js')(sequelize, Sequelize.DataTypes);
const tictactoeModel = require('./models/tictactoe');
console.log('Imported value:', tictactoeModel);

tictactoeModel(sequelize, Sequelize.DataTypes);

sequelize.sync().then(async () => {
    console.log('Database synced');
    sequelize.close();
}).catch(console.error);