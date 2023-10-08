import React, { useState, useRef } from 'react'

function Forms() {
    const [name, setName] = useState('');
    const inputValue = useRef(null)
    const handler = (e) => {
        e.preventDefault()
        const inputData = inputValue.current.value.trim()
        if(isNaN(inputData)) setName(inputData)
        else alert('Enter valid name')
    }
    const validate =() =>{
        alert('Enter valid name')
    }

    return (
        <div className="text-center container">
            <br />
            <form onSubmit={handler}>
                <div className='text-start'>
                    <label className='m-2'>Enter your name : </label><br />
                    <input type="text" pattern="[A-Za-z]+" onInvalid={validate} ref={inputValue}  />
                    <button type="submit"> SUBMIT </button>
                </div>
            </form>
            <div className="card col-sm-5 my-5">
                <h5 className='pt-2'>Entered Name</h5>
                <hr />
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default Forms