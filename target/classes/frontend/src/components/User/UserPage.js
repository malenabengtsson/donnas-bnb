import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../../contexts/UserContextProvider'
import { withRouter } from 'react-router-dom'
import MyBookings from './MyBookings'

const UserPage = (props) => {
    const [fullName, setFullName] = useState('')
    const [bookings, setBookings] = useState([])
    const { user } = useContext(UserContext)
    const [bookingsIsLoaded, setBookingsIsLoaded] = useState(false)

    useEffect(() => {
        getName()
    })

    useEffect(() => {
        getBookings()
    })

    const getName = () => {
        if(fullName !== '') return
        if(user !== null){
            setFullName(user.full_name)
        }
        
    }

    const getBookings = async () => {
        if(bookings && bookings.length){
            setBookingsIsLoaded(true)
            console.log('hello')
            return
        }
        if (user !== null){
            let res = await fetch('/rest/bookings/' + user.id)
            res = await res.json()
            setBookingsIsLoaded(res)
        } 
    }

    return (
        <>
        <h1 className="text-white text-center">{fullName}</h1>
        <MyBookings usrBookings={bookings}/>
        
        </>
    )
}

export default withRouter(UserPage)

// if (bookings.length > 0)