
import React from "react";


const GuestsModal = ({ handleClose, guestsModal, children }) => {
  const showHideClassName = guestsModal ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-guests'>
        {/* {children} */}
        <div className='adults'><p><strong>Adults</strong></p></div>
        <div className='minusadults'><p><button>-</button></p></div>
        <div className='totaladults'><p>1</p></div>
        <div className='plusadults'><p><button>+</button></p></div>
        <div className='children'><p><strong>Children</strong><br></br>Ages 2–12</p></div>
        <div className='minuschildren'><p><button>-</button></p></div>
        <div className='totalchildren'><p>0</p></div>
        <div className='pluschildren'><p><button>+</button></p></div>
        <div className='infants'><p><strong>Infants</strong><br></br>Under 2</p></div>
        <div className='minusinfants'><p><button>-</button></p></div>
        <div className='totalinfants'><p>0</p></div>
        <div className='plusinfants'><p><button>+</button></p></div>
        <div className='guestmax'><p>4 guests maximum. Infants don’t count toward the number of guests.</p></div>
        <div className='closeguestmodal'><button onClick={handleClose}>Close</button></div>
      </section>
    </div>
  );
};

export default GuestsModal;
