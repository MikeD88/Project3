//----------------------------------KNEX Set Up App-----------------------------------//

const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile')["development"])


app.get('/', (request, response) =>{
    response.send('Application up and running.')
})

app.listen(port, () => {
    console.log('Your Knex and Express application are running successfully.');
})
