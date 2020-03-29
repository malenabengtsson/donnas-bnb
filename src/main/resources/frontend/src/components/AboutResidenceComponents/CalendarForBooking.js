import React, { useState } from 'react'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FormGroup } from 'reactstrap'

const CalendarForBooking = () => {

    const [date, setDate] = useState(new Date())
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('') 
    const [year, setYear] = useState(2020)

    //onchange = date => setDate({ date })

    return(
      <>
        <h5>Välj datum:</h5>
        <FormGroup>
          <Calendar
            activeStartDate={date}
            calendarType="ISO 8601"
            maxDate={new Date(2020, 6, 25)}
            minDate={new Date(2020, 2, 29)}
            onChange={(value) => alert('New date is: ', value)}
            value={date} >
          </Calendar>
        </FormGroup>
      </>
    )
}

export default CalendarForBooking