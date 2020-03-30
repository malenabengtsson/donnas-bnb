import React, { useContext } from 'react'
import { BookingContext } from '../contexts/BookingContextProvider'


export default function BookingList() {
  const {bookings} = useContext(BookingContext)

    const list = () => {
        return bookings.map((booking, i) => {
            // return (
            //     <div>
            //     <p key={booking.id + i}>Booking id: {booking.id}</p>
            // <p key={booking.start_date + i}>Start date: {booking.start_date}</p>
            // <p key={booking.end_date + i}>End date: {booking.end_date}</p>
            //     </div>

            // )
        })
    }
  
    return (
      <>
        {list()}
      </>
    )
  }