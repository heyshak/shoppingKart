import React, { Component } from 'react'
import './Login.css'
// import Modal from '../../LoginModal/LoginModal'

export default class Login extends Component {
    
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    render() {
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
          };
        return (

            < div className="Wrapper" >
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>
                <a href="/Login" onClick={this.showModal} >
                    <span >
                        <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" />
                    </span>
                </a>
                <a href="/Login">
                    <span>
                        <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" />
                    </span>
                </a>

            </div >



        )
    }
}
