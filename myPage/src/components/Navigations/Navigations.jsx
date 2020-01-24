import React, { Component } from 'react'
import Link from './Links/Links'
import classes from './Navigations.module.css'
import Logo from '../Navigations/Logo/Logo'
import Login from '../Navigations/Login/Login'
import SearchBox from '../Navigations/Search/SearchBox'
export default class Navigations extends Component {

   
    render() {
        // let navStyle = ['NavBody','NavBody1'].join(' ')
        return (

            <div className={classes.NavBody}>

              
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
