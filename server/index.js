//import dependencies
const express = require('express');
const path = require('path');
const model = require('../db/model.js');
const app = express();
// const app = requre('express')();
const PORT = 3000;


// app.use(express.static('dist'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


//routes
//specific code required for each type of request
// app.get('/groceries', (req, res) => {
//   model.getAllGroceries((err, results) => {
//     if(err) {
//       console.log(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// })

// app.post('/groceries', (req, res) => {
//   console.log(req.body);
//   model.insertGrocery(req.body, (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send();
//     }
//   })
// })

//start server
app.listen(PORT,(err) => {
  if(err){
    console.log(err);
  } else {
    console.log('the server is listening on port: ', PORT);
  }
})