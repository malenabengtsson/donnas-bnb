import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../../contexts/UserContextProvider'
import { withRouter, useParams } from 'react-router-dom'
import MyBookings from './MyBookings'
import MyLeases from './MyLeases'
import { Button } from 'reactstrap'

const UserPage = (props) => {
    const [fullName, setFullName] = useState('')
    const [bookings, setBookings] = useState([])
    const { user } = useContext(UserContext)
    

    useEffect(() => {
        getName()
    })

    useEffect(() => {
        console.log('Updated bookings')
    }, [bookings])


    const getName = () => {
        if(fullName !== '') return
        if(user !== null){
            setFullName(user.full_name)
        }
        getBookings()
        
    }

    const getBookings = async () => {
        // if(bookings && bookings.length){
        //     return
        // }
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

    const addResidenceForRental = () => {
        props.history.push("/my-page/add-residence")
    }
    
    const btnStyle = {
        textAlign: "center",
        margin: "40px",  
    }

    return (
        <>
        <h1 className="text-center">{fullName}</h1>
        <MyBookings usrBookings={sendToChild}/>
        <MyLeases User={user} />
        <Button className="btn btn-success float-left" onClick={() => addResidenceForRental()} style={btnStyle}>Lägg till fastighet för uthyrning</Button>      
        </>
    )
}

export default withRouter(UserPage)

// if (bookings.length > 0)