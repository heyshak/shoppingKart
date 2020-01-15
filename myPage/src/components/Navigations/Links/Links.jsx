import React, { Component } from 'react'
import classes from './Links.module.css'

export default class Links extends Component {
    render() {
        return (
            <nav className={classes.Navbar}>
               <ul className={classes.MainNav}>
                   <li><a href="/page1" className={classes.NavItem}>Page1</a></li>
                   <li><a href="/page2" className={classes.NavItem} >Page2</a></li>
                   <li><a href="/page3" className={classes.NavItem} >Page3</a></li>
               </ul>
            </nav>
        )
    }
}
