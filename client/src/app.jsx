import React from 'react';
import Calendar from './components/calendar.jsx';
import BookingForm from './components/bookingform.jsx';
import GuestsModal from './components/guestsmodal.jsx';
import axios from 'axios';

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
  guestsModal: false,
  calendarModal: false,
  adults: 1,
  children: 0,
  infants: 0
}

this.showGuestsModal = this.showGuestsModal.bind(this);
this.hideGuestsModal = this.hideGuestsModal.bind(this);
this.showCalendarModal = this.showCalendarModal.bind(this);
this.hideCalendarModal = this.hideCalendarModal.bind(this);
this.addAdults = this.addAdults.bind(this);
this.minusAdults = this.minusAdults.bind(this);

}

showGuestsModal = () => {
  this.setState({ guestsModal: true });
}

hideGuestsModal = () => {
  this.setState({ guestsModal: false });
}

showCalendarModal = () => {
  this.setState({ calendarModal: true });
  console.log("SHOW CALENDAR!");
}

hideCalendarModal = () => {
  this.setState({ calendarModal: false });
}

addAdults = () => {
  var newAdultCount = this.state.adults + 1;
  this.setState({
    adults: newAdultCount
  })
}

minusAdults = () => {
  var newAdultCount = this.state.adults - 1;
  this.setState({
    adults: newAdultCount
  })
}

// var showHideCalendar = calendarModal ? 'modal display-block' : 'modal display-none';

  render() {

    if (this.state.calendarModal===true){
      return (
        <div>
        <BookingForm showGuestsModal={this.showGuestsModal} hideCalendarModal={this.hideCalendarModal}/>
                <GuestsModal  guestsModal={this.state.guestsModal} handleClose={this.hideGuestsModal} adults = {this.state.adults} children = {this.state.children} infants = {this.state.infants}   addAdults={this.addAdults} minusAdults={this.minusAdults}/>
                <Calendar/>
                </div>
        );

    } else {

      return (
        <div>
        <BookingForm showGuestsModal={this.showGuestsModal}  showCalendarModal={this.showCalendarModal}/>
        {/* </div>
                <div> */}
                <GuestsModal guestsModal={this.state.guestsModal} handleClose={this.hideGuestsModal}  adults = {this.state.adults} children = {this.state.children} infants = {this.state.infants}   addAdults={this.addAdults} minusAdults={this.minusAdults}/>
                  {/* <p>Modal</p>
                  <p>Data</p>
                </GuestsModal> */}
                {/* <button type='button' onClick={this.showGuestsModal}>Open</button> */}
                </div>
        );

    }

  }
}
export default App;

{/* <Calendar header={"Calendar"}/> */}