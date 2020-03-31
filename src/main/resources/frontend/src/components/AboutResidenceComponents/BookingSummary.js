import React, { useState } from 'react'
import { Button } from 'reactstrap'

const BookingSummary = (props) => {

    const calculatePrice = () => {
        let start = props.startDate.split('/') // array with start date start[0] = day : start[1] = month
        let end = props.endDate.split('/') // array with end date end[0] = day : end[1] = month


        let startDate = new Date(start[1] + '/' + start[0])
        let endDate = new Date(end[1] + '/' + end[0])

        let diffrenceInTime = endDate.getTime() - startDate.getTime()
        let diffrenceInDays = diffrenceInTime / (1000 * 3600 * 24)

        diffrenceInDays = Math.round(diffrenceInDays)

        return diffrenceInDays * props.pricePerNight
    }

    const getDate = () => {
        return props.startDate + ' - ' + props.endDate
    }

    const [date, setDate] = useState(getDate)
    const [price, setPrice] = useState(calculatePrice)

    return (
        <>
            <p>{date}</p>
            <p>Pris per natt: {price} kr</p>
            <Button className="btn btn-success">Reservera</Button>
        </>
    )
}

export default BookingSummary