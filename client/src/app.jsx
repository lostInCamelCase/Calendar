import React from 'react';
import Calendar from './components/calendar.jsx';
import BookingForm from './components/bookingform.jsx';
import axios from 'axios';

class App extends React.Component {
constructor(props) {
super(props);
this.state = {}

}

  render() {
    return (
      <div>
      <BookingForm/>
      </div>
      );
  }
}
export default App;

{/* <Calendar header={"Calendar"}/> */}