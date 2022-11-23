const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])

const fs = require('fs');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('application is running.')
})

app.listen(port, () => {
  console.log(`knex and express are running on port ${port}`)
})

app.get('/firstview'), (req, res) => {

}

app.post('/firstview', (req, res) => {

})

app.patch('/firstview/:id', (req, res) => {

})

app.delete('/firstview/:id', (req, res) => {

})

module.exports = app;