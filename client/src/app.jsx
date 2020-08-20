import React from 'react';
import BookingForm from './components/bookingform.jsx';
import GuestsModal from './components/guestsmodal.jsx';
import NewCalendar from './components/newcalendar.jsx';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
  guestsModal: false,
  calendarModal: false,
  adults: 1,
  children: 0,
  infants: 0,
  totalGuests: 1
}

this.showGuestsModal = this.showGuestsModal.bind(this);
this.hideGuestsModal = this.hideGuestsModal.bind(this);
this.showCalendarModal = this.showCalendarModal.bind(this);
this.hideCalendarModal = this.hideCalendarModal.bind(this);
this.addAdults = this.addAdults.bind(this);
this.minusAdults = this.minusAdults.bind(this);
this.addChildren = this.addChildren.bind(this);
this.minusChildren = this.minusChildren.bind(this);
this.addInfants = this.addInfants.bind(this);
this.minusInfants = this.minusInfants.bind(this);
this.reserve = this.reserve.bind(this);

}

reserve = () => {
  alert('You have made a reservation for ' + this.state.totalGuests + ' guests');
  event.preventDefault();
}


showGuestsModal = () => {
  this.setState({ guestsModal: true });
}

hideGuestsModal = () => {
  this.setState({ guestsModal: false });
}

showCalendarModal = () => {
  this.setState({ calendarModal: true });
}

hideCalendarModal = () => {
  this.setState({ calendarModal: false });
}



addAdults = () => {
  var newAdultCount = this.state.adults + 1;
  var newtotalGuests = newAdultCount + this.state.children;
  this.setState({
    adults: newAdultCount,
    totalGuests: newtotalGuests
  })
}

minusAdults = () => {
  var newAdultCount = this.state.adults - 1;
  if(newAdultCount < 1){
    newAdultCount = 1;
  }
  var newtotalGuests = newAdultCount + this.state.children;
  this.setState({
    adults: newAdultCount,
    totalGuests: newtotalGuests
  })
}

addChildren = () => {
  var newchildrenCount = this.state.children + 1;
  var newtotalGuests = this.state.adults + newchildrenCount;
  this.setState({
    children: newchildrenCount,
    totalGuests: newtotalGuests
  })
}

minusChildren = () => {
  var newchildrenCount = this.state.children - 1;
  if(newchildrenCount < 0){
    newchildrenCount = 0;
  }
  var newtotalGuests = this.state.adults + newchildrenCount;
  this.setState({
    children: newchildrenCount,
    totalGuests: newtotalGuests
  })
}

addInfants = () => {
  var newInfantsCount = this.state.infants + 1;
  var newtotalGuests = newInfantsCount + this.state.adults + this.state.children;
  this.setState({
    infants: newInfantsCount,
    totalGuests: newtotalGuests
  })
}

minusInfants = () => {
  var newInfantsCount = this.state.infants - 1;
  if(newInfantsCount < 0){
    newInfantsCount = 0;
  }
  var newtotalGuests = newInfantsCount + this.state.adults + this.state.children;
  this.setState({
    infants: newInfantsCount,
    totalGuests: newtotalGuests
  })
}


// var showHideCalendar = calendarModal ? 'modal display-block' : 'modal display-none';

  render() {

    if (this.state.calendarModal===true){
      return (
        <div>
        <BookingForm hideCalendarModal={this.hideCalendarModal} totalGuests = {this.state.totalGuests} reserve = {this.reserve}/>
                <GuestsModal  guestsModal={this.state.guestsModal} handleClose={this.hideGuestsModal}  adults = {this.state.adults} children = {this.state.children} infants = {this.state.infants}   addAdults={this.addAdults} minusAdults={this.minusAdults}  addAdults={this.addAdults} minusAdults={this.minusAdults} addChildren={this.addChildren} minusChildren={this.minusChildren} addInfants={this.addInfants} minusInfants={this.minusInfants}/>
                <NewCalendar hideCalendarModal={this.hideCalendarModal}/>
                </div>
        );

    } else {

      return (
        <div>

        <BookingForm showGuestsModal={this.showGuestsModal}  showCalendarModal={this.showCalendarModal} totalGuests = {this.state.totalGuests}  reserve = {this.reserve}/>

                <GuestsModal guestsModal={this.state.guestsModal} handleClose={this.hideGuestsModal}  adults = {this.state.adults} children = {this.state.children} infants = {this.state.infants}   addAdults={this.addAdults} minusAdults={this.minusAdults}  addAdults={this.addAdults} minusAdults={this.minusAdults} addChildren={this.addChildren} minusChildren={this.minusChildren} addInfants={this.addInfants} minusInfants={this.minusInfants}/>
                </div>
        );

    }

  }
}
export default App;
