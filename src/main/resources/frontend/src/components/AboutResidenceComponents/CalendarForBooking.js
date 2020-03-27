import React, { useState } from 'react'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FormGroup } from 'reactstrap'

const CalendarForBooking = () => {

    const [date, setDate] = useState('')

    onchange = date => setDate({ date })

    return(
        <FormGroup>
          <Calendar
            onChange={onchange}
            value={date} >
          </Calendar>
        </FormGroup>
    )
}

export default CalendarForBooking