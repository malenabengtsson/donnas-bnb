import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const fetchUser = async () => {
        let res = await fetch('/auth/whoami')
        try {
            res = await res.json()
            setUser(res)
            setIsLoggedIn(true)
        }catch {
            console.log('Not authenticated')
        }

    }

    useEffect(() => {
        fetchUser()
    }, [])

    const values = {
        user,
        fetchUser,
        setUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider