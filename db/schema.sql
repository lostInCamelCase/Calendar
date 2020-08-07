DROP DATABASE IF EXISTS bookingCalendar;

CREATE DATABASE bookingCalendar;

USE bookingCalendar;

CREATE TABLE booking (
  id int NOT NULL AUTO_INCREMENT,
  adults int NOT NULL,
  children int NOT NULL,
  infants int NOT NULL,
  startDate date NOT NULL,
  endDate date NOT NULL,
  rentalID int NOT NULL,
  -- pricePerNight decimal(10, 2) NOT NULL,
  -- discountPricePerNight decimal(10, 2) NOT NULL,
  totalPrice decimal(10, 2) NOT NULL,
  totalSaved decimal(10, 2) NOT NULL,
  -- foreign key(rentalID) references rentals(id),
  PRIMARY KEY (ID)
);
CREATE TABLE rentals (
  id int NOT NULL AUTO_INCREMENT,
  rental_name varchar(50) NOT NULL,
  rental_description varchar(50) NOT NULL,
  rating decimal(10, 2) NOT NULL,
  guestMax int NOT NULL,
  pricePerNight decimal(10, 2) NOT NULL,
  discountPricePerNight decimal(10, 2) NOT NULL,
  weeklyDiscount boolean NOT NULL,
  cleaningFee decimal(10, 2) NOT NULL,
  serviceFee decimal(10, 2) NOT NULL,
  numOfReviews int NOT NULL,
  PRIMARY KEY (ID)
);
-- CREATE TABLE calendar (
--   id int NOT NULL AUTO_INCREMENT,
--   date date NOT NULL,
--   rentalID int NOT NULL,
--   isBooked boolean NOT NULL,
--   year text NOT NULL,
--   month text NOT NULL,
--   day text NOT NULL,
--   PRIMARY KEY (ID)
--   foreign key(rentalID) references rentals(id),
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */


