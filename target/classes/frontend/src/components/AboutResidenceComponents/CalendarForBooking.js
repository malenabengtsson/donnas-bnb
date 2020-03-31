import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BookingSummary from './BookingSummary'

const CalendarForBooking = (props) => {
    

    const [periods, setPeriods] = useState([])

    const [startDates, setStartDates] = useState([]) // stores periods start dates as year/month/day
    const [endDates, setEndDates] = useState([]) // stores periods end dates as year/month/day

    const [selectedStartDate, setSelectedStartDate] = useState(new Date())
    const [selectedEndDate, setSelectedEndDate] = useState(new Date())

    const onFromDateChange = from => {
    //  setFromDate(from)
      sendStartDateToParent(from)
    }

    const onUntilDateChange = until => {
     // setUntilDate(until)
      sendEndDateToParent(until)
    }

    const sendStartDateToParent = (data) => {
      props.startingDate(data)
    }

    const sendEndDateToParent = (data) => {
      props.endingDate(data)
    }

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    /*
      This function get all the periods from the db and then store all the periods linked to a residence in an arry.
      Then loop through them and split them on "/" to be able to set date as month/day/year instead of day/month/year.
    */
    const getStartAndEndDate = async () => {
      let res = await fetch('/rest/availablePeriods')
      res = await res.json()
      let arryOfStartDates = []
      let arryOfEndDates = []
      res.forEach(el => {
        if(el.residence_id === props.residenceId){
          arryOfStartDates.push(el.start_date)
          arryOfEndDates.push(el.end_date)
        }
      })

      arryOfStartDates = splitArray(arryOfStartDates, "/")
      arryOfEndDates = splitArray(arryOfEndDates, "/")

      let arryOfPeriods = getCalculatedPeriods(arryOfStartDates, arryOfEndDates)
      setPeriods(arryOfPeriods)
      

      arryOfStartDates = getAsDates(arryOfStartDates)
      arryOfEndDates = getAsDates(arryOfEndDates)
      
      setStartDates(arryOfStartDates)
      setEndDates(arryOfEndDates)
    }

    // Loop through an array and split on charackter
    // arry = array you want to split
    // character you want to split on
    const splitArray = (arry, character) => {
      let splitedArray = []
      for (let i=0; i < arry.length; i++){
        let splited = arry[i].split(character)
        splitedArray.push(splited)
      }
      return splitedArray
    }

    // Takes in two arrays and add them to one string example: 26/03 - 24/04
    const getCalculatedPeriods = (arryOne, arrayTwo) => {
      let calculatedDates = []
      for (let i=0; i < arryOne.length; i++){
        let p = arryOne[i][0] + '/' + arryOne[i][1] + ' - ' + arrayTwo[i][0] + '/' + arrayTwo[i][1]
        calculatedDates.push(p)
      }
      return calculatedDates
    }
    // this functions convert arry of string months and days to js Date()
    const getAsDates = (arry) => {
      let dates = []
      for (let i=0; i < arry.length; i++){
        let month = arry[i][1]
        let day = arry[i][0]

        if (month.charAt(0) === '0') month = month.slice(1)

        let date = new Date(2020, month-1, day)
        dates.push(date)
      }
      return dates
    }

    

    const periodsList = periods.map((period, i) => {
      return (
        <DropdownItem key={period + i} onClick={e => {
          setSelectedStartDate(startDates[i])
          setSelectedEndDate(endDates[i])
        }}>
          {period}
        </DropdownItem>
      )
    })

    useEffect(() => {
      getStartAndEndDate()
    }, [])

    useEffect(() => {
      
    })

    return(
      <>
        <h5>Välj datum:</h5>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret className="btn btn-success">
            Välj period
          </DropdownToggle>
          <DropdownMenu>
            {periodsList}
          </DropdownMenu>
        </ButtonDropdown>
        <h6>Från: </h6>
        <DatePicker
          minDate={selectedStartDate}
          onChange={onFromDateChange}
          value={selectedStartDate}
        />
        <h6>Till: </h6>
        <DatePicker
          maxDate={selectedEndDate}
          onChange={onUntilDateChange}
          value={selectedEndDate}
        />
        <BookingSummary startDate={selectedStartDate} endDate={selectedEndDate} residenceId={props.residenceId}/>
      </>
    )
}

export default CalendarForBooking

// DatePicker doc = https://github.com/wojtekmaj/react-date-picker