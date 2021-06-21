import React, { Component } from 'react'

export class RegularChild extends Component {
    render() {
        console.log("RegularChild Component")
        return (
            <div>
                RegularChild Component : {this.props.name}
            </div>
        )
    }
}

export default RegularChild
