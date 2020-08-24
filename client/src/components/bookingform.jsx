import React from "react";
import GuestsModal from './guestsmodal.jsx';
import moment from "moment";
import styles from '../cssmodules/BookingForm.module.css';

// var today = moment().format('L');

// var oneWeek = moment().add(7, 'days').format('L');

var BookingForm = (props) => (
  <div className={styles.outerbooking}>
    <div className={styles.bookingform}>
      <div className={styles.rate}>
        <p>${props.pricePerNight}</p>
      </div>
      <div className={styles.pernight}>
        <p>/night</p>
      </div>
      <div className={styles.starRating}><p><span className="fas fa fa-star"></span></p></div>
      <div className={styles.rating}>
        <p>{props.rating}</p>
      </div>
      <div className={styles.numratings}>
        <p>({props.numOfReviews})</p>
      </div>
      <div className={styles.checkin} onClick={props.showCalendarModal}>
        <p>CHECK-IN<br></br>{props.checkin}</p>
      </div>
      <div className={styles.checkout} onClick={props.showCalendarModal}>
        <p>CHECK-OUT<br></br>{props.checkout}</p>
      </div>
      <div className={styles.guests} onClick={props.showGuestsModal}>
        <p>GUESTS<br></br>{props.totalGuests} guest(s)</p>
      </div>

      <div className={styles.guestschevron} onClick={props.showGuestsModal}>
        <p><span className="fas fa fa-chevron-down fa-lg"></span></p>
      </div>

      <div className={styles.reserve} onClick={props.reserve}>
        <h5>Reserve</h5>
      </div>
      <div className={styles.wontbechargedyet}>
        <p>You won't be charged yet</p>
      </div>
      <div className={styles.ratexnights}>
        <p>${props.pricePerNight} x {props.numNights} nights</p>
      </div>
      <div className={styles.ratexnightstotal}>
        <p>${props.nightsxprice}</p>
      </div>
      <div className={styles.cleaningfee}>
        <p>Cleaning fee</p>
      </div>
      <div className={styles.cleaningfeetotal}>
        <p>${props.cleaningFee}</p>
      </div>

      <div className={styles.servicefee}>
        <p>Service fee</p>
      </div>
      <div className={styles.servicefeetotal}>
        <p>${props.serviceFee}</p>
      </div>
      <div className={styles.total}>
        <p>Total</p>
      </div>
      <div className={styles.totalprice}>
        <p>${props.totalPrice}</p>
      </div>
    </div>
  </div>
)

export default BookingForm;