import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../../contexts/UserContextProvider'

const UserPage = () => {
    const [fullName, setFullName] = useState('')
    const { user } = useContext(UserContext)

    useEffect(() => {
        getName()
    })

    const getName = () => {
        console.log(user)
    }

    

    return (
        <h1>{user}</h1>
    )
}

export default UserPage