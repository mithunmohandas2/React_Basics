import React, { Component } from 'react'

export class ClassDemo extends Component {
    render() {
        return (
            <div>
                <p className='App'>Created by {this.props.message}</p>
            </div>
        )
    }
}

export default ClassDemo