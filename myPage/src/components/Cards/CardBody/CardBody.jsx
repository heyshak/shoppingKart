import React, { Component } from 'react'
import classes from './CardBody.module.css'
// import CardHeader from '../CardHeader/CardHeader'
class CardBody extends Component {
    render() {
        const { image, category } = this.props
        var style = {
            backgroundImage: 'url(' + image + ')',
            width:'100%',
            height:'100%'
            
        }
        return (
            <header style={style} className={classes.CardBody} >
                <h4 >{category}</h4>
                <a href="/favourite"><i class="fa fa-heart-o fa-2x" aria-hidden="true"></i></a>
                
            </header>




        )
    }
}
export default CardBody