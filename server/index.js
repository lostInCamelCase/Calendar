//import dependencies
const express = require('express');
const path = require('path');
const model = require('../db/model.js');
const app = express();
const PORT = 3011;

// const seed = require('../db/seeddata.js'); //seed initial data on npm start

// app.use(express.static('dist'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/rentalpricing', (req, res) => {
  model.getPricing((err, results) => {
    if(err) {
      console.log(err);
      res.status(404).send();
    } else {
      res.status(200).send(results);
    }
  });
})

// app.post('/bookings', (req, res) => {
//   console.log(req.body);
//   model.insertBooking(req.body, (err, results) => {
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