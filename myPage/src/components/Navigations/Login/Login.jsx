import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {

    
   
    render() {  
        return (
            
            < div className="Wrapper" >

                
                <a href="/Login" onClick={this.props.openHandle} >
                    <span >
                        <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" />
                    </span>
                </a>
                <a href="/Login1">
                    <span>
                        <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" />
                    </span>
                </a>
            </div >



        )
    }
}
