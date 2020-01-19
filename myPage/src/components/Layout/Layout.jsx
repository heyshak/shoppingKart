import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import NavigationItems from '../../components/Navigations/Navigations'
import CardMain from "../../container/CardMain/CardMain"
import classes from './Layout.module.css'
import Carousel from '../Carousel/Carousel'
class Layout extends Component {
    render() {

        return (
            <Aux  >
                <NavigationItems />
                <Carousel />
                <div className={classes.CardMain}>
                    <CardMain />
                </div>
            </Aux>

        )
    }
}
export default Layout