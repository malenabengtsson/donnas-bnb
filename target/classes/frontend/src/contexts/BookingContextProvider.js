import React, { createContext, useState, useEffect } from 'react'

export const BookingContext = createContext()

export default function BookingContextProvider(props){
    const [bookings, setBookings] = useState([])

    const appendBooking = (booking) => {
        // three dots (...) is called a 
        // spread syntax, and this will
        // copy the content of the array
        setBookings([...bookings, booking])
      }
    
      const removeBooking = id => {
        // updates the array with a filtered array
        // where we filter out our recipe
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
    
      /**
       * Run the fetch once
       * (good practice to fetch init data in
       * a useEffect hook once Context gets loaded)
       */
      useEffect(() => {
        fetchBookings()
      }, [])
      
      const values = {
        bookings, 
        setBookings,
        appendBooking,
        removeBooking
      }

    return(
        <BookingContext.Provider value={{bookings}}>
            {props.children}
        </BookingContext.Provider>
    )


}