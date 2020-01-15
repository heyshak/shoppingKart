import React, { Component } from 'react'
import classes from './CardBody.module.css'
// import CardHeader from '../CardHeader/CardHeader'
class CardBody extends Component {
    render() {
        const { image, category, text, title } = this.props
        var style = {
            backgroundImage: 'url(' + image + ')',
            height: '250px'

        }
        return (


            <header style={style} className={classes.CardBody} >
                <h4 >{category}</h4>
                <h4>{title}</h4>
                <p>{text}</p>
            </header>




        )
    }
}
export default CardBody