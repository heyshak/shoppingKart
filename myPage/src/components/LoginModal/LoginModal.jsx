import React from 'react'

export default function LoginModal() {
    const Modal = ({ handleClose, show, children }) => {
        const showHideClassname = show ? "modal display-block" : "modal display-none";
      
    return (
        <div className={showHideClassname}>
          <section className="modal-main">
            {children}
            <button onClick={handleClose}>close</button>
          </section>
        </div>
      );
}
};