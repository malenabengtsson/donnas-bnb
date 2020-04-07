import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../../contexts/UserContextProvider'

const UserPage = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const { user } = useContext(UserContext)

    
    useEffect(() => {
        console.log(user)
    })

    return (
        <h1>My Page</h1>
    )
}

export default UserPage