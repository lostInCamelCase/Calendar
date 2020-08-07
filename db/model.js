const db = require('./index.js');

// module.exports = {
//   getAllGroceries: function(callback){
//     // console.log('this is where I would get all groceries');
//     db.query('select * from groceries', (err, results, fields) =>{
//       if(err){
//         console.log('Results:', results);
//       } else {
//         console.log('Results:', results);
//         callback(null, results);
//       }
//     })
//   },

//   insertGrocery: function(grocery, callback){
//     db.query(`insert into groceries (name, quantity) values ("${grocery.name}", ${grocery.quantity})`, (err, results, fields) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, results);
//       }
//     })
//     // console.log('this is where I would add a grocery');
//   }
// }