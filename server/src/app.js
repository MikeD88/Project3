const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('This is not the endpoint you are looking for.');
})

app.listen(port, () => {
  console.log(`knex and express are running on port ${port}`)
})

app.get('/members', (req, res) => {
  knex('members')
    .select('*')
    .then((members) => {
      let result = members.map((member) => member);
      res.json(result);
    })
});

app.get('/members/:id', (req, res) => {
  const { id } = req.params;
  knex('members')
    .where('id', id)
    .select('*')
    .then((members) => {
      let result = members.map((member) => member);
      res.json(result);
    })
});

app.get('/member-records', (req, res) => {
  knex('members', 'trainings', 'member_records')
    .join('member_records', 'members.id', 'member_records.member')
    .join('trainings', 'trainings.id', 'member_records.training')
    .select('members.l_name', 'trainings.name', 'member_records.completion_date')
    .then((records) => {
      let result = records.map((record) => record);
      res.json(result);
    })
});

app.get('/member-records/:id', (req, res) => {
  const { id } = req.params;
  knex('members')
    .where('members.id', id)
    .join('member_records', 'members.id', 'member_records.member')
    .join('trainings', 'trainings.id', 'member_records.training')
    .select('members.l_name', 'trainings.name', 'member_records.completion_date')
    .then((records) => {
      let result = records.map((record) => record);
      res.json(result);
    })
})

app.get('/trainings', (req, res) => {
  knex('trainings')
    .select('*')
    .then((trainings) => {
      let result = trainings.map((training) => training);
      res.json(result);
    })
});

app.get('/trainings/:id', (req, res) => {
  let { id } = req.params;
  knex('members')
    .where('id', id)
    .select('*')
    .then((records) => {
      let result = records.map((record) => record);
      res.json(result);
    })
})

app.post('/members', async (req, res) => {
  const maxIdQuery = await knex('members').max('id as maxId').first();
  let num = maxIdQuery.maxId + 1;
  knex('members')
    .insert(
      {
        id: num,
        rank: req.body.rank,
        l_name: req.body.l_name,
        f_name: req.body.f_name,
        email_addr: req.body.email_addr,
        unit: req.body.unit,
        office_symbol: req.body.office_symbol,
        job_code: req.body.job_code
      }
    )
    .then(function (result) {
      res.status(201).send('A new member has been added')
    })
});

app.post('/trainings', async (req, res) => {
  const maxIdQuery = await knex('trainings').max('id as maxId').first();
  let num = maxIdQuery.maxId + 1;
  knex('trainings')
    .insert(
      {
        id: num,
        name: req.body.name,
        frequency: req.body.frequency,
      }
    )
    .then(function (result) {
      res.status(201).send('A new training file has been added')
    })
});

app.patch('/members/:id', (req, res) => {
  let { id } = req.params;
  knex('members')
    .where('id', id)
    .update({
      rank: req.body.rank,
      l_name: req.body.l_name,
      f_name: req.body.f_name,
      email_addr: req.body.email_addr,
      unit: req.body.unit,
      office_symbol: req.body.office_symbol,
      job_code: req.body.job_code
    })
    .then(members => {
      members === 0 ? res.status(200).send(`Entry ${id} doesn't exist, so nothing was updated`)
        : res.status(201).send(`Member ${id} is updated`)
    })
});

app.patch('/trainings/:id', (req, res) => {
  let { id } = req.params;
  knex('trainings')
    .where('id', id)
    .update({
      name: req.body.name,
      frequency: req.body.frequency,
    })
    .then(trainings => {
      trainings === 0 ? res.status(200).send(`Entry ${id} doesn't exist, so nothing was updated`)
        : res.status(201).send(`Training File ${id} is updated`)
    })
});

app.delete('/members/:id', (req, res) => {
  let { id } = req.params;
  knex('members')
    .where('id', id)
    .del()
    .then(members => {
      members === 0 ? res.status(200).send(`Entry ${id} doesn't exist, so nothing was deleted`)
        : res.status(201).send(`Member ${id} was deleted`)
    })
});

app.delete('/member-records/:mbr&:trng', (req, res) => {
  let { mbr, trng } = req.params;
  knex('member_records')
    .where('training', trng)
    .andWhere('member', mbr)
    .del()
    .then(memberrecord => {
      memberrecord === 0 ? res.status(200).send(`Entry doesn't exist, so nothing was deleted`)
        : res.status(201).send(`Member Record was deleted`)
    })
});

app.delete('/trainings/:id', (req, res) => {
  let { id } = req.params;
  knex('trainings')
    .where('id', id)
    .del()
    .then(members => {
      members === 0 ? res.status(200).send(`Entry ${id} doesn't exist, so nothing was deleted`)
        : res.status(201).send(`Training File ${id} was deleted`)
    })
});

app.get('*', function (req, res) {
  res.status(404).send(`404: You tried navigating to a path that doesn't exist...`);
});
app.post('*', function (req, res) {
  res.status(404).send(`404: You tried posting to a path that doesn't exist...`);
});
app.patch('*', function (req, res) {
  res.status(404).send(`404: You tried patching in a path that doesn't exist...`);
});
app.delete('*', function (req, res) {
  res.status(404).send(`404: You tried deleting in a path that doesn't exist...`);
});

module.exports = app;