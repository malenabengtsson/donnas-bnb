import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'reactstrap'
import BookingOptionsModal from '../BookingOptionsModal'
import { withRouter, useHistory, Route, Redirect } from 'react-router-dom'
import BookAsGuest from '../../pages/BookAsGuest'
import { BookingContext } from "../../contexts/BookingContextProvider"
import { UserContext } from "../../contexts/UserContextProvider"



const BookingSummary = (props) => {
    const [residence, setResidence] = useState('')
    const [startShortDate, setStartShortDate] = useState('')
    const [endShortDate, setEndShortDate] = useState('')
    const { isLoggedIn, user  } = useContext(UserContext);
  

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

    const getStartDate = () => {
        let startMonth = ('0' + (props.startDate.getMonth() + 1)).slice(-2)
        let startDate = ('0' + props.startDate.getDate()).slice(-2);
        let startYear = props.startDate.getFullYear()
        let startShortDate = startDate + '/' + startMonth + '/' + startYear
        return startShortDate
    }

    const getEndDate = () => {
        let endMonth = ('0' + (props.endDate.getMonth() + 1)).slice(-2)
        let endDate = ('0' + props.endDate.getDate()).slice(-2);
        let endYear = props.startDate.getFullYear()
        let endShortDate = endDate + '/' + endMonth + '/' + endYear
        return endShortDate
    }

    console.log(getDate())
    const [startDate, setStartDate] = useState(getStartDate())
    const [endDate, setEndDate] = useState(getEndDate())
    const [date, setDate] = useState(getDate())
    const [price, setPrice] = useState(899)// useState(props.pricePerNight)
    const { thisBooking, setThisBooking } = useContext(BookingContext)
    

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [openBaG, setOpenBaG] = useState(false)

    const toggle = () => setIsModalOpen(!isModalOpen)
    const toggleBaG = (e) => {
        console.log(residence)
        e.preventDefault()
        setThisBooking({
            start_date: startDate,
            end_date: endDate,
            residence_id: residence,
            user_id: user,
            total_price: price
        })
        console.log(price)
     setOpenBaG(!openBaG)
       props.history.push('/book-as-guest/' + props.residenceId)
    }

    

    const update = () => {
        
        setDate(getDate())
        setStartDate(getStartDate())
        setEndDate(getStartDate())
        setPrice(calculatePrice)
    }

    useEffect(() => {
        console.log(thisBooking)

    },[thisBooking])

    useEffect(() => {
        update()
    })

    const goToLoginPage = () => {
        props.history.push("/sign-in")
    }


    return (
      <>
        {/* <> 
        
              {props.history.push('/book-as-guest/' + props.residenceId)} 
             
             </>  */}

        <p>{date}</p>
        <p>Totalt pris: {price} kr</p>
        {isLoggedIn ? (
          <>
            <Button
              type="submit"
              className="btn btn-success"
              thisBooking={thisBooking}
              residenceId={props.residenceId}
              onClick={toggleBaG}
            >
              Reservera
            </Button>
          </>
        ) : (
          <Button
            type="submit"
            className="btn btn-success"
            onClick={goToLoginPage}
          >
            Logga in först
          </Button>
        )}
        {/* <BookingOptionsModal isOpen = {isModalOpen}  toggle={toggle} toggleBaG ={toggleBaG} startDate={props.startDate} /> */}
        {/* {bookingDate.startDate ?

            (<BookAsGuest bookingDate={bookingDate} residenceId={props.residenceId} date={date} />)
            :''
            } */}
      </>
    );
}

export default withRouter(BookingSummary)