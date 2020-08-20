
import React from "react";
import styles from '../cssmodules/GuestsModal.module.css';

// { handleClose, guestsModal, children }

const GuestsModal = (props) => {
  // const showHideClassName = props.guestsModal ? 'modaldisplayblock' : 'modaldisplaynone';

var showModal = props.guestsModal;

if(showModal===true){

  return (
    <div className={styles.modal}>
          {/* <div className={showHideClassName}></div> */}
      <section className={styles.modalguests}>
        <div className={styles.adults}><p><strong>Adults</strong></p></div>
        <div className={styles.minusadults}><p><button onClick={props.minusAdults}>-</button></p></div>
        <div className={styles.totaladults}><p>{props.adults}</p></div>
        <div className={styles.plusadults}><p><button onClick={props.addAdults}>+</button></p></div>
        <div className={styles.children}><p><strong>Children</strong><br></br>Ages 2–12</p></div>
        <div className={styles.minuschildren}><p><button onClick={props.minusChildren}>-</button></p></div>
        <div className={styles.totalchildren}><p>{props.children}</p></div>
        <div className={styles.pluschildren}><p><button onClick={props.addChildren}>+</button></p></div>
        <div className={styles.infants}><p><strong>Infants</strong><br></br>Under 2</p></div>
        <div className={styles.minusinfants}><p><button  onClick={props.minusInfants}>-</button></p></div>
        <div className={styles.totalinfants}><p>{props.infants}</p></div>
        <div className={styles.plusinfants}><p><button  onClick={props.addInfants}>+</button></p></div>
        <div className={styles.guestmax}><p>4 guests maximum. Infants don’t count toward the number of guests.</p></div>
        <div className={styles.closeguestmodal}><button onClick={props.handleClose}>Close</button></div>
      </section>
    </div>
  );

 } else {
   return <div></div>
 }
};

export default GuestsModal;
