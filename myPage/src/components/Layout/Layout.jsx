import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import NavigationItems from '../../components/Navigations/Navigations'
import CardMain from "../../container/CardMain/CardMain"
import classes from './Layout.module.css'
import Carousel from '../Carousel/Carousel'
class Layout extends Component{
    render(){
       
        return(
            <Aux >
                <NavigationItems/>
                <div className={classes.CardMain}>
                    <CardMain/>
                </div>
                <Carousel/>
            </Aux>
            
        )
    }
}
export default Layout