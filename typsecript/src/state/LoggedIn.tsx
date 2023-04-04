import { useState } from 'react'

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const LogIn = () => {
        setIsLoggedIn(true)
    }
    const LogOut = () => {
        setIsLoggedIn(false)
    }
    return (
        <>
            <div className="btn-container">
                {' '}
                <button onClick={LogIn}>Log in</button>
                <button onClick={LogOut}>Log out</button>
            </div>
            <h4>Person is: {isLoggedIn ? 'Logged in' : 'Logged out'}</h4>
        </>
    )
}
