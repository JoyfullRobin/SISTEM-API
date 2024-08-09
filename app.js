const express = require ('express');                     // criação do web server
const app = express();                                  
const sequelize = require('./config/config');

const User = require('./models/user');

sequelize.sync()
    .then(
        () => {
            console.log('Database conected and synced');            
        })
        .catch(
            (error) => {
                console.error('Unable to connect to the database: ',error);
            }
        )

module.exports = app;