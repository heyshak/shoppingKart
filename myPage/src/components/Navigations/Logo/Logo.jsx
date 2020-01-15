import React, { Component } from 'react'
import img from '../../../assets/Myntra.png'
import classes from './Logo.module.css'

export default class Logo extends Component {
    render() {
        return (
            <div >
                <img className={classes.Logo} src={img} alt="Logo"/>
            </div>
        )
    }
}
