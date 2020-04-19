import React, { createContext, useState, useEffect } from 'react'

export const BookingContext = createContext()

export default function BookingContextProvider(props){
    const [bookings, setBookings] = useState([])
    const [thisBooking, setThisBooking] = useState({
      startDate: null,
      endDate: null,
      residenceId:null,
      userId: null,
      totalPrice: null
  })

    const appendBooking = (booking) => {
        
        setBookings([...bookings, booking])
      }
    
      const removeBooking = id => {
       
        setBookings(bookings.filter(r => r.id !== id))
      
    
        fetch('/rest/bookings/' + id, {
          method: 'DELETE'
        })

    }
    const fetchBookings = async () => {
        let res = await fetch('/rest/bookings')
        res = await res.json()
        setBookings(res)
      }
 
      useEffect(() => {
        fetchBookings()
      }, [])
      
      const values = {
        bookings, 
        setBookings,
        appendBooking,
        removeBooking,
        thisBooking,
        setThisBooking
      }

    return(
        <BookingContext.Provider value={values}>
            {props.children}
        </BookingContext.Provider>
    )


}