import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const handleincrement=()=>{
      setCount(count+1)
    }
    const handledecrement = () => {}
    const handlereset = () => {};
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
    </div> 
  )
}

export default Counter