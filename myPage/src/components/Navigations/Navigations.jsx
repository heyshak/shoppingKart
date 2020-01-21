import React, { Component } from 'react'
import Link from './Links/Links'
import classes from './Navigations.module.css'
import Logo from '../Navigations/Logo/Logo'
import Login from '../Navigations/Login/Login'
import SearchBox from '../Navigations/Search/SearchBox'
import Modal from '../../components/Navigations/LoginModal/LoginModal'
import LoginForm from '../../components/Navigations/Login/LoginForm'
export default class Navigations extends Component {

    state = {
        isOpen :false
    }

    openHandler = (props)=>{
        this.setState({isOpen:true})
    }
    render() {
        // let navStyle = ['NavBody','NavBody1'].join(' ')
        return (

            <div className={classes.NavBody}
            
            openHandle = {this.openHandler}>
                <Modal isopen = {this.state.isOpen} >

                    <LoginForm/>
                </Modal>
                <ul className={classes.NavBody1}>
                    <Logo />
                    <Link />
                </ul>

                <ul className={classes.NavBody2}>
                    <SearchBox />
                    <Login />

                </ul>
                
               
            </div>





        )
    }
}
