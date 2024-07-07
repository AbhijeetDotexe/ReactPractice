import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);
    function add(){
        setCount((prev)=>{
            return prev+1;
        })
    }

    function sub(){
        setCount((prev)=>{
            return prev-1;
        })
    }
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={sub}>-</button>
        <h2 style={{margin:9}}>Count:{count}</h2>
        <button onClick={add}>+</button>
    </div>
  )
}

export default Counter