import React from "react";
import GuestsModal from './guestsmodal.jsx';


var BookingForm = (props) =>  (
  <div className="outer-booking">
    <div className="booking-form">
          <div className="rate">
          <p>$200</p>
          </div>
          <div className="pernight">
          <p>/night</p>
          </div>
          <div className="starRating"><p><span className="fas fa fa-star"></span></p></div>
          <div className="rating">
          <p>4.74</p>
          </div>

          <div className="numratings">
          <p>(147)</p>
          </div>
        <div className="checkin"  onClick={props.showCalendarModal}>
        <p>CHECK-IN<br></br>08/24/2020</p>
        </div>
        <div className="checkout" onClick={props.hideCalendarModal}>
        <p>CHECK-OUT<br></br>08/28/2020</p>
        </div>
        <div className="guests" onClick={props.showGuestsModal}>
        <p>GUESTS<br></br>{props.totalGuests} guest(s)</p>
        </div>

        <div className="guests-chevron" onClick={props.showGuestsModal}>
        <p><span className="fas fa fa-chevron-down fa-lg"></span></p>
        </div>

        <div className="reserve">
        <h5>Reserve</h5>
        </div>
        <div className="wont-be-charged-yet">
          <p>You won't be charged yet</p>
        </div>

        <div className="rate-x-nights">
          <p>$245 x 4 nights</p>
        </div>
        <div className="rate-x-nights-total">
          <p>$980</p>
        </div>
        <div className="cleaningfee">
          <p>Cleaning fee</p>
        </div>
        <div className="cleaningfee-total">
          <p>$130</p>
        </div>

        <div className="servicefee">
          <p>Service fee</p>
        </div>
        <div className="servicefee-total">
          <p>$157</p>
        </div>
        <div className="total">
          <p>Total</p>
        </div>
        <div className="total-price">
          <p>$1,267</p>
        </div>
    </div>
  </div>
)

export default BookingForm;