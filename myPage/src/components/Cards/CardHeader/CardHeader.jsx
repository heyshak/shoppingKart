import React, { Component } from 'react'
import classes from './CardHeader.module.css'

export default class CardHeader extends Component {
    render() {
        const { title, text } = this.props
        return (
            <div className={classes.CardHeader}>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        )
    }
}
