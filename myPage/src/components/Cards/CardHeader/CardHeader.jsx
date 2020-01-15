import React, { Component } from 'react'

export default class CardHeader extends Component {
    render() {
        const { title, text } = this.props
        return (
            <div>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        )
    }
}
