import React, { Component } from 'react'
import classes from './SideDrawer.module.css'
class SideDrawer extends Component {

    state = {
        toggle: false,
    }


    toggleHandler = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        let toggle = null
        if (this.state.toggle) {
            toggle = (
                <nav className={classes.SideDrawer}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </nav>

            )
        }
        return (

            <div >
                <button onClick={this.toggleHandler}>Toggle</button>
                {toggle}


            </div>
        )
    }
}
export default SideDrawer