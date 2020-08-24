import React from 'react';
import GuestsModal from './guestsmodal.jsx';
import moment from "moment";
import styles from '../cssmodules/NewCalendar.module.css';

import CalendarThisMonth from './calendar.jsx';
import CalendarNextMonth from './calendarnextmonth.jsx';

class NewCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment().format('L'),
      oneWeekLater: moment().add(7, 'days').format('L'),
      thisMonth: moment(),
      nextMonth: moment().add(1, 'months'),
      numnights: 7,
      staystart: moment().format('L'),
      stayend: moment().add(7, 'days').format('L'),
      checkInOutToggle: true,

    }

    this.setCheckInOut2 = this.setCheckInOut2.bind(this);
  }


  setCheckInOut2 = (newdate) => {
    if(this.state.checkInOutToggle ==true){
      this.setState({
        staystart: newdate,
        checkInOutToggle: false
      })
    } else {
      this.setState({
        stayend: newdate,
        checkInOutToggle: true
      })
    }
    this.props.setCheckInOut(newdate);
  }



  render() {

    return (
      <div className={styles.newcal}>
        <div className={styles.calnights}><p><strong>{this.state.numnights} nights</strong></p></div>
        <div className={styles.calstaydates}><p><strong>{this.state.staystart} - {this.state.stayend}</strong></p></div>
        <div className={styles.calcheckin}>
          <p>CHECK-IN<br></br>{this.props.checkin}</p>
        </div>
        <div className={styles.calcheckout}>
          <p>CHECK-OUT<br></br>{this.props.checkout}</p>
        </div>
        <div className={styles.calarea}><CalendarThisMonth setCheckInOut2={this.setCheckInOut2}/></div>
        <div className={styles.calarea2}><CalendarNextMonth setCheckInOut2={this.setCheckInOut2}/></div>
        <div className={styles.calbr}>
          <button className={styles.calclosebutton} onClick={this.props.hideCalendarModal}>close</button>
        </div>
      </div>
    );
  }
}
export default NewCalendar;