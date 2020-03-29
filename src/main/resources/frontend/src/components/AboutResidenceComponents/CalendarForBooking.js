import React, { useState } from 'react'
import DatePicker from 'react-date-picker'

const CalendarForBooking = () => {

    const [fromDate, setFromDate] = useState(new Date())
    const [untilDate, setUntilDate] = useState(new Date())

    const onFromDateChange = from => {
      setFromDate(from)
    }

    const onUntilDateChange = until => {
      setUntilDate(until)
    }

    return(
      <>
        <h5>Välj datum:</h5>
        <h6>Från: </h6>
        <DatePicker
          onChange={onFromDateChange}
          value={fromDate}
        />
        <h6>Till: </h6>
        <DatePicker
          onChange={onUntilDateChange}
          value={untilDate}
        />
      </>
    )
}

export default CalendarForBooking

// DatePicker doc = https://github.com/wojtekmaj/react-date-picker