import React, { Component } from 'react'
import classes from './CardBody.module.css'
// import 'materialize-css/dist/css/materialize.min.css';

class CardBody extends Component {
    render() {
        const { image, category } = this.props
        var style = {
            backgroundImage: 'url(' + image + ')',
            width: '100%', //width of the image(means card body)
            height: '250px', //height of the image(means card body)
            borderRadius: '10px',
            
        }
        return (
            <header style={style} className={classes.CardBody} >
                <h4 >{category}</h4>
                <div><i class="fa fa-heart-o fa-2x " aria-hidden="true"></i></div>
            
            </header>




        )
    }
}
export default CardBody