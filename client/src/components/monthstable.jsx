import React from "react";
import moment from "moment";
import { range } from "moment-range";
import styles from '../cssmodules/Calendar.module.css';


class MonthsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  weekdayshort = moment.weekdaysShort();


    render() {


      let weekdayshortname = this.weekdayshort.map(day => {
        return (
          <div>
          <th key={day} className={styles.weekday}>
           {day}
          </th>
          </div>
        );
     });

    }

}

export default MonthsTable;

