import React, { useState, useEffect, useContext } from 'react'
import DatePicker from 'react-date-picker'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { SelectedPeriodContext } from '../../contexts/SelectedPeriodContextProvider'

const CalendarForBooking = (props) => {
    const { addFromDate } = useContext(SelectedPeriodContext)
    const { addUntilDate } = useContext(SelectedPeriodContext)

    const [fromDate, setFromDate] = useState(new Date())
    const [untilDate, setUntilDate] = useState(new Date())

    const [periods, setPeriods] = useState([])

    const [startDate, setStartDate] = useState([]) // stores periods start dates as year/month/day
    const [endDate, setEndDate] = useState([]) // stores periods end dates as year/month/day

    const [selectedStartDate, setSelectedStartDate] = useState(new Date())
    const [selectedEndDate, setSelectedEndDate] = useState(new Date())

    const onFromDateChange = from => {
      setFromDate(from)
      addFromDate(from)
    }

    const onUntilDateChange = until => {
      setUntilDate(until)
      addUntilDate(until)
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
      let arryOfStartDate = []
      let arryOfEndDate = []
      res.forEach(el => {
        if(el.residence_id === props.residenceId){
          arryOfStartDate.push(el.start_date)
          arryOfEndDate.push(el.end_date)
        }
      })
      for (let i=0; i < arryOfStartDate.length; i++){
        arryOfStartDate[i] = arryOfStartDate[i].split("/")
        arryOfEndDate[i] = arryOfEndDate[i].split("/")
      }
      for (let i=0; i < arryOfStartDate.length; i++){
        arryOfStartDate[i] = arryOfStartDate[i][1] + '/' + arryOfStartDate[i][0]
        arryOfEndDate[i] = arryOfEndDate[i][1] + '/' + arryOfEndDate[i][0]
      }
      let arryOfPeriods = []
      for (let i=0; i < arryOfStartDate.length; i++){
        let p = arryOfStartDate[i] + ' - ' + arryOfEndDate[i]
        arryOfPeriods.push(p)
      }
      let startDates = []
      let endDates = []
      for (let i=0; i < arryOfStartDate.length; i++){
        let startMonth = arryOfStartDate[i].split("/")[0]
        let startDay = arryOfStartDate[i].split("/")[1]
        
        let endMonth = arryOfEndDate[i].split("/")[0]
        let endDay = arryOfEndDate[i].split("/")[1]

        if (startMonth.charAt(0) === '0') startMonth = startMonth.slice(1)
        if (endMonth.charAt(0) === '0') endMonth = endMonth.slice(1)

        let start = new Date(2020, startMonth-1, startDay)
        let end = new Date(2020, endMonth-1, endDay)

        startDates.push(start)
        endDates.push(end)
      }
      setStartDate(startDates)
      setEndDate(endDates)
      setPeriods(arryOfPeriods)
    }

    const periodsList = periods.map((period, i) => {
      return (
        <DropdownItem key={period + i} onClick={e => {
          setSelectedStartDate(startDate[i])
          setSelectedEndDate(endDate[i])
        }}>
          {period}
        </DropdownItem>
      )
    })

    useEffect(() => {
      getStartAndEndDate()
    }, [])

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
          value={fromDate}
        />
        <h6>Till: </h6>
        <DatePicker
          maxDate={selectedEndDate}
          onChange={onUntilDateChange}
          value={untilDate}
        />
      </>
    )
}

export default CalendarForBooking

// DatePicker doc = https://github.com/wojtekmaj/react-date-picker