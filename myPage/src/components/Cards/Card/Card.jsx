import React, { Component } from 'react'
import classes from './Card.module.css'
import CardBody from '../CardBody/CardBody'
import CardHeader from '../CardHeader/CardHeader'
class Card extends Component {
    render() {
        return (
            <div className={classes.Card}>

                <CardBody category={this.props.category} image={this.props.image} />
                <CardHeader  title={this.props.title} text={this.props.text}/>
                
 
            </div>


        )
    }
}
export default Card
