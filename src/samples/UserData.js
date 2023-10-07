import React from 'react'
function UserData(props) {
  return (
    <div>
        <h1 className='text-light'> Name : {props.UserData.name} </h1>
        <h5 className='text-dark'> Email : {props.UserData.email}</h5>
    </div>
  )
}

export default UserData

