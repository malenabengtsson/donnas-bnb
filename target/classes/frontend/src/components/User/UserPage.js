import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../../contexts/UserContextProvider'
import { withRouter, useParams } from 'react-router-dom'
import MyBookings from './MyBookings'

const UserPage = (props) => {
    const [fullName, setFullName] = useState('')
    const [bookings, setBookings] = useState([])
    const { user } = useContext(UserContext)

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
            return
        }
        if (user !== null){
            let arryOfUserBookings = []
            let res = await fetch('/rest/bookings')
            res = await res.json()
            res.forEach(el => {
                if (el.user_id.id === user.id){
                    arryOfUserBookings.push(el)
                }
            })
            setBookings(arryOfUserBookings)
        } 
    }

    const sendToChild = (bookingsChild) => {
        return bookings
    }

    return (
        <>
        <h1 className="text-white text-center">{fullName}</h1>
        <MyBookings usrBookings={sendToChild}/>      
        </>
    )
}

export default withRouter(UserPage)

// if (bookings.length > 0)