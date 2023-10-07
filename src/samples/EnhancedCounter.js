import "../App.css"
import Header from '../components/Header';
import UserData from "./UserData";
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function EnhancedCounter() {
    const title = "Enhanced Counter"
    const [count, setCount] = useState(1)
    const [user, setUser] = useState('')
    const addCount = () => { if (count < 10) setCount(count + 1) }
    const decCount = () => { if (count > 1) setCount(count - 1) }

   async function getData(count) {
         await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then((value) => { 
                console.log(value.data)
                setUser(value.data) }).catch((error)=>{ console.log(error)})
    }

    useEffect(() => {
        getData(count)
    },[count])

    return (
        <div className="App ">
            <Header message={title} />
            <h1 className="App container p-5 text-center"> User Details : {count}</h1>
            <button className='btn btn-outline-danger px-4 m-2' onClick={addCount}>+</button>
            <button className='btn btn-outline-danger px-4 m-2' onClick={decCount}>-</button>
            <div className="container p-4 mt-4" style={{ background: '#2ab5b8' }}>
                <UserData UserData={user}/>
            </div>
        </div>
    )
}

export default EnhancedCounter