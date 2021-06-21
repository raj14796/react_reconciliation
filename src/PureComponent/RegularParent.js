import React, { Component } from 'react'
import PureChild from './PureChild'
import RegularChild from './RegularChild'

export class RegularParent extends Component {
    state={
        name : "ravi"
    }
    render() {
        console.log("*********RegularParent***********")
        return (
            <div>
                <PureChild name={this.state.name} />
                <RegularChild name={this.state.name} />
                <button onClick={()=>this.setState({name:"ravi"})}>Regular</button>
            </div>
        )
    }
}

export default RegularParent
