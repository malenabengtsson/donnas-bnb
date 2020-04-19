import React, { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const appendUser = (user) => {

        setUsers([...users, user])
    }


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

    const fetchUsers = async () => {
        let res = await fetch('/rest/users')
        res = await res.json()
        setUsers(res)
      }

    useEffect(() => {
        fetchUser()
    }, [])

    const values = {
        user,
        fetchUser,
        fetchUsers,
        setUser,
        appendUser,
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