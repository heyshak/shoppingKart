import React, { Component } from 'react'
import Card from '../Cards/Card/Card'
import classes from './Cards.module.css'

export default class Cards extends Component {
    render() {
        return (
            <div className={classes.Cards}>
                <Card category={this.props.details.category} image={this.props.details.image}
                title={this.props.details.title} text={this.props.details.text}
                />
                
                
            </div>
        )
    }
}
