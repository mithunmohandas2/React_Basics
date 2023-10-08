import React,{useState, useEffect} from 'react'

function Counter2() {
    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        console.log("Mounted");
        console.log("update"+count)

        return (()=>{
            console.log("Unmounted"+count);
        })
    },[count]) 
  return (
    <div className='App'>
        <h1> Hidden conunter 1 value : {count} </h1>
        <button onClick={()=>{setCount(count+1)}} className='btn btn-primary'>ADD</button>
    </div>
  )
}

export default Counter2