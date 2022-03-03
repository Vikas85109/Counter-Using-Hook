import React, { useState } from 'react'




const App=()=>{

  const [count,setCount]=useState(0)

  const IncNum=()=>{
    setCount(count+1);
  }


  const DecNum=()=>{
    setCount(count-1)
  }

  return(
    <>
    <div className="main">
    <button onClick={IncNum} >Increment</button>
    <h1>{count}</h1>
    <button onClick={DecNum} >Decrement</button>
    </div>
    </>
  )
}
export default App;