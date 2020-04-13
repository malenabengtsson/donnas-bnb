import React, { useState, useEffect } from 'react'


const BookedResidence = (props) => {
    const [date, setDate] = useState('')

    useEffect(() => {
        formatDate()
    })

    const formatDate = () => {
        let formattedDate = props.startDate + ' - ' + props.endDate
        setDate(formattedDate)
    }

    return (
        <>
         <p>Datum: {date}</p>
         <p>Pris: {props.totalPrice}</p>   
        </>
    )
}


export default BookedResidence