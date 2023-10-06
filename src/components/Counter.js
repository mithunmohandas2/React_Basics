import React,{useState} from 'react'
function Counter(props) {
    const [count, setCount] = useState(0);
    const {title} = props //destructuring

    // functions for counter
    const addCount = () => {
        setCount(count + 1)
        // console.log(count)
    }
    const decCount = () => {
        setCount(count - 1)
        // console.log(count)
    }
    // ---------------
    return (
        <div>
            <h1 className="App container p-5 text-center">{title} : {count}</h1>
            <div className='text-center'>
                <button className='btn btn-outline-danger px-4 m-2' onClick={addCount}>+</button>
                <button className='btn btn-outline-danger px-4 m-2' onClick={decCount}>-</button>
            </div>
        </div>
    )
}

export default Counter