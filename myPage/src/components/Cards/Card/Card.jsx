import React, { Component } from 'react'
import CardBody from '../CardBody/CardBody'
import classes from './Card.module.css'
import CardHeader from '../CardHeader/CardHeader'
 class Card extends Component {
    render() {
        return (
            <div className={classes.Card}>
            <CardBody  category={this.props.details.category}
            image={this.props.details.image}
            />
            <CardHeader  title={this.props.details.title}  text={this.props.details.text}/>

            </div>
        )
    }
}
export default Card
