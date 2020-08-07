var faker = require('faker');

var generateRental = () => {
  var startDate = faker.date.future();
  var endDate = faker.date.future(); //update to modify startdate

}

var generateBooking = () => {
  var randomName = faker.name.findName();
  var randomAdults = Math.floor(Math.Random(4));
  var randomChildren = Math.floor(Math.Random(4));
  var randomInfants = Math.floor(Math.Random(2));

}