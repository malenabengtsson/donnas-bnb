import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'reactstrap'


const BookingSummary = (props) => {
    const [residence, setResidence] = useState('')
    const [startShortDate, setStartShortDate] = useState('')
    const [endShortDate, setEndShortDate] = useState('')

    const calculatePrice = () => {
        let startMonth = ('0' + (props.startDate.getMonth() + 1)).slice(-2)
        let startDate = ('0' + props.startDate.getDate()).slice(-2);
        let startYear = props.startDate.getFullYear()
        let startShortDate = new Date(startYear, startMonth, startDate)

        let endMonth = ('0' + (props.endDate.getMonth() + 1)).slice(-2)
        let endDate = ('0' + props.endDate.getDate()).slice(-2);
        let endYear = props.startDate.getFullYear()
        let endShortDate = new Date(endYear, endMonth, endDate)

        

        let diffrenceInTime = endShortDate.getTime() - startShortDate.getTime()
        let diffrenceInDays = diffrenceInTime / (1000 * 3600 * 24)

        

        diffrenceInDays = Math.round(diffrenceInDays)
        return diffrenceInDays * residence.price_per_night
    }

    const getPriceFromDb = async () => {
        console.log(residence)
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        setResidence(res)
        console.log(res)
      //  return res
    }

    useEffect(() => {
        getPriceFromDb()
    }, [])

    const getDate = () => {
        // Start date
        let startMonth = ('0' + (props.startDate.getMonth() + 1)).slice(-2)
        let startDate = ('0' + props.startDate.getDate()).slice(-2);
        let startYear = props.startDate.getFullYear()
        let startShortDate = startDate + '/' + startMonth + '/' + startYear

        // End date
        let endMonth = ('0' + (props.endDate.getMonth() + 1)).slice(-2)
        let endDate = ('0' + props.endDate.getDate()).slice(-2);
        let endYear = props.startDate.getFullYear()
        let endShortDate = endDate + '/' + endMonth + '/' + endYear
        return startShortDate + ' - ' + endShortDate
    }

    

    const [date, setDate] = useState(getDate)
    const [price, setPrice] = useState()// useState(props.pricePerNight)

    const update = () => {
        setDate(getDate())
        setPrice(calculatePrice)
    }

    useEffect(() => {
        update()
    })

    return (
        <>
            <p>{date}</p>
            <p>Totalt pris: {price} kr</p>
            <Button className="btn btn-success">Reservera</Button>
        </>
    )
}

export default BookingSummary