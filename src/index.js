import React from 'react'
import ReactDOM from 'react-dom'
import Reconciliation from './Reconciliation/Reconciliation'
import ReactConflict from './ReactConflict/ReactConflict'
import PureParent from './PureComponent/PureParent'
import RegularParent from './PureComponent/RegularParent'


ReactDOM.render(
    <Reconciliation />,
    document.getElementById('virtualDOM')
)

// ReactDOM.render(
//     <ReactConflict />,
//     document.getElementById('realDOM')
// )

// ReactDOM.render(
//     <RegularParent />,
//     // <PureParent />,
//     document.getElementById('virtualDOM')
// )