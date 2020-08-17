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
  calendarModal: false
}

this.showGuestsModal = this.showGuestsModal.bind(this);
this.hideGuestsModal = this.hideGuestsModal.bind(this);
this.showCalendarModal = this.showCalendarModal.bind(this);
this.hideCalendarModal = this.hideCalendarModal.bind(this);

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



  render() {
    return (
      <div>
      <BookingForm guestsModal={this.state.guestsModal} handleClose={this.hideGuestsModal}/>
      {/* </div>
              <div> */}
              <GuestsModal guestsModal={this.state.guestsModal} handleClose={this.hideGuestsModal}/>
                {/* <p>Modal</p>
                <p>Data</p>
              </GuestsModal> */}
              <button type='button' onClick={this.showGuestsModal}>Open</button>
              </div>
      );
  }
}
export default App;

{/* <Calendar header={"Calendar"}/> */}