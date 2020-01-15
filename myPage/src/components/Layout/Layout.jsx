import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import NavigationItems from '../../components/Navigations/Navigations'
import CardMain from "../../container/CardMain/CardMain"
class Layout extends Component{
    render(){
        return(
            <Aux>
                <NavigationItems/>
                <CardMain/>
            </Aux>
            
        )
    }
}
export default Layout