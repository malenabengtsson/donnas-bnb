import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../../contexts/UserContextProvider'
import { withRouter } from 'react-router-dom'

const UserPage = (props) => {
    const [fullName, setFullName] = useState('')
    const { user } = useContext(UserContext)

    useEffect(() => {
        getName()
    })

    const getName = () => {
        if(user !== null){
            setFullName(user.full_name)
        }
        
    }

    

    return (
        <h1 className="text-white text-center">{fullName}</h1>
    )
}

export default withRouter(UserPage)