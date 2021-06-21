import React, { PureComponent } from 'react'
import PureChild from './PureChild'
import RegularChild from './RegularChild'

export class PureParent extends PureComponent {
    state={
        name : "ravi"
    }
    render() {
        console.log("*********PureParent***********")
        return (
            <div>
                <PureChild name={this.state.name} />
                <RegularChild name={this.state.name} />
                <button onClick={()=>this.setState({name:"ravi"})}>Pure</button>
            </div>
        )
    }
}

export default PureParent
