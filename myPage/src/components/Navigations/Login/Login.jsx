import React, { Component } from 'react'
import './Login.css'
import Modal from '../../Navigations/LoginModal/LoginModal'

export default class Login extends Component {
    state = {
        show: false
    };
    showModal = e => {
        this.setState({
            show: true
        });
    };



    render() {
        
        
        
        return (
            
            < div className="Wrapper" >

                <a href="/Login" onClick={this.showModal }   >
                    <span >
                        <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" />
                    </span>
                </a>
                <a href="/Login1">
                    <span>
                        <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" />
                    </span>
                </a>

                <Modal show={this.state.show}/>
            </div >



        )
    }
}
