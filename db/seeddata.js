// var faker = require('faker');
const db = require('./index.js');


var adjective1 = ["Beautiful", "Homey", "Peaceful", "Wonderful", "Happening", "Unforgettable", "Lovely", "Amazing", "One-Of-A-Kind", "Fantastic", "Glorious", "Somewhat-Rundown"];

var rentalType = ["Apartment", "House", "House Boat", "Tree House", "Bio Dome", "Space Ship", "Trailer", "Mobile Home", "Villa", "Castle"];

var adjective2 = ["By The Sea", "Close To Downtown", "By The River", "By The Lake", "In The Countryside", "Close To Restaurants and Shopping"];

var descriptionHelper = [" is a great place to say", " is fun for the whole family", " is also occupied by 7 cats", " is best known for its ghost sightings", " will make you forget your worries", " is the best place to stay EVER", " will make you never want to leave"];


var generateRental = () => {
  var randomRentalName = adjective1[Math.floor(Math.random() * adjective1.length)] + ' ' + rentalType[Math.floor(Math.random() * rentalType.length)] + ' ' + adjective2[Math.floor(Math.random() * adjective2.length)];


  var randomDescription = randomRentalName + descriptionHelper[Math.floor(Math.random() * descriptionHelper.length)];

  var randomRating = (3 + Math.random()*2).toFixed(1);

  var randomGuestMax = 2 + Math.floor(Math.random()*8);

  var randomPricePerNight = 75+ Math.floor(Math.random()*400);

  var randomDiscountedPricePerNight = randomPricePerNight * .8;

  var randomHasWeeklyDiscount = Math.floor(Math.random()*2);

  var randomCleaningFee = 25 + Math.floor(Math.random()*140);

  var randomServiceFee = 20 + Math.floor(Math.random()*65);

  var randomnumOfReviews = 27 + Math.floor(Math.random()* 750);


    db.query(`insert into rentals (rental_name, rental_description, rating, guestMax, pricePerNight, discountPricePerNight, weeklyDiscount, cleaningFee, serviceFee, numOfReviews) values ("${randomRentalName}", "${randomDescription}", ${randomRating}, ${randomGuestMax}, ${randomPricePerNight}, ${randomDiscountedPricePerNight}, ${randomHasWeeklyDiscount}, ${randomCleaningFee}, ${randomServiceFee}, ${randomnumOfReviews})`, (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        console.log(null, results);
      }
    })
}


var generateRentals = (num) => {
  for (var i=0; i < num; i++){
    generateRental();
  }
}

// generateRentals(5);   //uncomment to keep seeding db




// var generateBooking = () => {
    // var startDate = faker.date.future();
  // var endDate = faker.date.future(); //update to modify startdate
//   var randomName = faker.name.findName();
//   var randomAdults = Math.floor(Math.Random(4));
//   var randomChildren = Math.floor(Math.Random(4));
//   var randomInfants = Math.floor(Math.Random(2));
//Not needed for demo
// }

