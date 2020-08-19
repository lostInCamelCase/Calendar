import React from 'react';
import GuestsModal from './guestsmodal.jsx';
import moment from "moment";


import Calendar from './calendar.jsx';

class NewCalendar extends React.Component {
constructor(props) {
super(props);
this.state = {
  today: moment().format('L'),
  oneWeekLater: moment().add(7, 'days').format('L'),
  thisMonth: moment(),
  nextMonth: moment().add(1, 'months'),
  // calendarModal: true,
  numnights: 7,
  staystart: moment().format('L'),
  stayend:  moment().add(7, 'days').format('L'),
}

// this.showNewCalendarModal = this.showNewCalendarModal.bind(this);
// this.hideNewCalendarModal = this.hideNewCalendarModal.bind(this);
}



// showNewCalendarModal = () => {
//   this.setState({ calendarModal: true });
// }

// hideNewCalendarModal = () => {
//   this.setState({ calendarModal: false });
// }




  render() {

    // if (this.state.calendarModal===true){
      return (
        <div className='newcal'>
                  <div className='calnights'><p><strong>{this.state.numnights} nights</strong></p></div>
                  <div className='calstaydates'><p><strong>{this.state.staystart} - {this.state.stayend}</strong></p></div>
            <div className="calcheckin">
              <p>CHECK-IN<br></br>{this.state.today}</p>
            </div>
            <div className="calcheckout">
              <p>CHECK-OUT<br></br>{this.state.oneWeekLater}</p>
            </div>
            <div className="calarea"><Calendar/></div>
            <div className="calarea2"><Calendar/></div>
            <div className="calbr">
            <button className="calclosebutton" onClick={this.props.hideCalendarModal}>close</button>
            </div>
        </div>
        );

    // } else {

    //   return (
    //     <div>
    //     </div>
    //     );

    // }

  }
}
export default NewCalendar;