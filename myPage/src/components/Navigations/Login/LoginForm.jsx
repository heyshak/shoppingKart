import React from 'react'
import Aux from  '../../../hoc/Auxiliary/Auxiliary'
 const loginForm = (props)=>{
     return(
        <Aux onClick={props.click}>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>

        </Aux>
     )
 }
 export default loginForm