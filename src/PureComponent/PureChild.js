import React, { PureComponent } from 'react'

export class PureChild extends PureComponent {
    render() {
        console.log("PureChild Component")
        return (
            <div>
                PureChild Component : {this.props.name}
            </div>
        )
    }
}

export default PureChild
