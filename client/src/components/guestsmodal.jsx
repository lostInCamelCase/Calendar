
import React from "react";

// { handleClose, guestsModal, children }

const GuestsModal = (props) => {
  const showHideClassName = props.guestsModal ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-guests'>
        {/* {children} */}
        <div className='adults'><p><strong>Adults</strong></p></div>
        <div className='minusadults'><p><button onClick={props.minusAdults}>-</button></p></div>
        <div className='totaladults'><p>{props.adults}</p></div>
        <div className='plusadults'><p><button onClick={props.addAdults}>+</button></p></div>
        <div className='children'><p><strong>Children</strong><br></br>Ages 2–12</p></div>
        <div className='minuschildren'><p><button onClick={props.minusChildren}>-</button></p></div>
        <div className='totalchildren'><p>{props.children}</p></div>
        <div className='pluschildren'><p><button onClick={props.addChildren}>+</button></p></div>
        <div className='infants'><p><strong>Infants</strong><br></br>Under 2</p></div>
        <div className='minusinfants'><p><button  onClick={props.minusInfants}>-</button></p></div>
        <div className='totalinfants'><p>{props.infants}</p></div>
        <div className='plusinfants'><p><button  onClick={props.addInfants}>+</button></p></div>
        <div className='guestmax'><p>4 guests maximum. Infants don’t count toward the number of guests.</p></div>
        <div className='closeguestmodal'><button onClick={props.handleClose}>Close</button></div>
      </section>
    </div>
  );
};

export default GuestsModal;
