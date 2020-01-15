import React, { Component } from 'react'
import classes from './SearchBox.module.css'

export default class SearchBox extends Component {
    render() {
        return (
            <div className={classes.Search} >
                <a href="/Search">
               <span>
                    <i class="fa fa-search" aria-hidden="true" style={{'color':'grey'}}></i>
                </span>
               </a>
                <input type="text" className={classes.SearchBox} placeholder="Search for products" />
               

            </div>
        )
    }
}
