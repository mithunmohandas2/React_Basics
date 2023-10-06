// functional component 
import React from 'react'

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/">
                    <img src="https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg" alt="logo" width="30" height="24" className="d-inline-block align-text-top me-2" />
                       Sample Projects by {props.message}
                </a>
            </div>
        </nav>
    )
}

export default Header