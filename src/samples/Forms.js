import React, { useState } from 'react'

function Forms() {
    const [name, setName] = useState('');
    const handler =()=>{}
    return (
        <div className="text-center">
            <form>
                <label>Enter your name :  </label>
                <input type="text" value={name} onChange={handler} />
                <button type="submit"> SUBMIT </button>

            </form>
        </div>
    )
}

export default Forms