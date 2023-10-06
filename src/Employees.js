import React from 'react'

function Employees(props) {
    const {name,age,email}= props
  return (
    <div className='card p-3 mx-5 my-1 bg-warning'>
        <h5 className='text-center'> Name : {name} | Age : {age} | Email : {email} </h5>
    </div>
  )
}

export default Employees