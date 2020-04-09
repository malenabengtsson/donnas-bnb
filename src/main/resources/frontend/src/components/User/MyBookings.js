import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Card } from 'reactstrap'
import {UserContext} from '../../contexts/UserContextProvider'

const MyBooking = (props) => {
    const { user } = useContext(UserContext)

    const list = () => {
        if(props.usrBookings.length > 0) {
            console.log('hello')
            return props.usrBookings.map((booking, i) => {
                return (
                    <p key={i}>{booking}</p>
                )
            })
        }
    }

    return (
        <Card>
            {list()}
        </Card>
    )
}

export default withRouter(MyBooking)