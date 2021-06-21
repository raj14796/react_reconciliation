import React, { useState } from 'react'

const Reconciliation = () => {
    const [count, setCount] = useState(0)
    const [countArr,setCountArr] = useState([0])
    const [countArr1,setCountArr1] = useState([0])
    const handleClick = (e) => {
        e.preventDefault()
        setCount(count + 1)
        setCountArr([...countArr,count+1])
        setCountArr1([count+1,...countArr1])
    }
    return (
        <div>
            <span>VirtualDOM Count  : {count}</span>
            <br />
            <button onClick={(e) => handleClick(e)} >ClickForVirtualDOM</button>
            <br /><br />
            <ul id="push">
                {
                    countArr.map((ele)=>(
                        <li>{ele},</li>
                    ))
                }
            </ul>
            <br /><br />
            <ul id="unshiftWithoutKey">
                {
                    countArr1.map((ele)=>(
                        <li>{ele},</li>
                    ))
                }
            </ul>
            <br /><br />
            <ul id="unshiftUsingKey">
                {
                    countArr1.map((ele)=>(
                        <li key={ele}>{ele},</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Reconciliation
