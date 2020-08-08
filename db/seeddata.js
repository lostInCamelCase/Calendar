var faker = require('faker');

var generateRental = () => {
  var startDate = faker.date.future();
  var endDate = faker.date.future(); //update to modify startdate

  var randomRentalName = adjective1[Math.floor(Math.random() * adjective1.length)] + ' ' + rentalType[Math.floor(Math.random() * rentalType.length)] + ' ' + adjective2[Math.floor(Math.random() * adjective2.length)];

  var randomDescription = randomRentalName + descriptionHelper[Math.floor(Math.random() * descriptionHelper.length)];

  var randomRating = 3 + (Math.Random()*2);
  var randomGuestMax = 2 + Math.floor(Math.Random()*8);

  var randomPricePerNight = 75+ Math.floor(Math.random()*400);
  var discountedPricePerNight = randomPricePerNight * .8;
  var hasWeeklyDiscount = Math.floor(Math.random()*2);



  var randomCleaningFee = 25 + Math.floor(Math.Random()*140);
  var randomServiceFee = 20 + Math.floor(Math.Random()*65);
  var randomnumOfReviews = 27 + Math.floor(Math.Random()* 750);


}

// var generateBooking = () => {
//   var randomName = faker.name.findName();
//   var randomAdults = Math.floor(Math.Random(4));
//   var randomChildren = Math.floor(Math.Random(4));
//   var randomInfants = Math.floor(Math.Random(2));
//Not needed for demo
// }

var adjective1 = ["Beautiful", "Homey", "Peaceful", "Wonderful", "Happening", "Unforgettable", "Lovely", "Amazing", "One-Of-A-Kind", "Fantastic", "Glorious", "Somewhat-Rundown"];

var rentalType = ["Apartment", "House", "House Boat", "Tree House", "Bio Dome", "Space Ship", "Trailer", "Mobile Home", "Villa", "Castle"];

var adjective2 = ["By The Sea", "Close To Downtown", "By The River", "By The Lake", "In The Countryside", "Close To Restaurants and Shopping"];

var descriptionHelper = [" is a great place to say", " is fun for the whole family", " is also occupied by 7 cats", " is best known for its ghost sightings", " will make you forget your worries", " is the best place to stay EVER", " will make you never want to leave"];