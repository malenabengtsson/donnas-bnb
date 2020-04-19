import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingSummary from "./BookingSummary";

const CalendarForBooking = (props) => {
  const [startDates, setStartDates] = useState([]);
  const [endDates, setEndDates] = useState([]); 
  const [unavailableDates, setUnavailableDates] = useState([]);

  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());


  const [dropdownOpen, setOpen] = useState(false);

  // const toggle = () => setOpen(!dropdownOpen);

 
  const getStartAndEndDate = async () => {
    let res = await fetch("/rest/availablePeriods");
    res = await res.json();
    let arryOfStartDates = [];
    let arryOfEndDates = [];
    res.forEach((el) => {
      if (el.residence_id.id == props.residenceId) {
        arryOfStartDates.push(el.start_date);
        arryOfEndDates.push(el.end_date);
      }
    });

    arryOfStartDates = getAsDates(arryOfStartDates);
    arryOfEndDates = getAsDates(arryOfEndDates);

    setStartDates(arryOfStartDates);
    setEndDates(arryOfEndDates);
    setSelectedStartDate(arryOfStartDates[0])
    setSelectedEndDate(arryOfEndDates[0])

    let unavailableDays =
      (arryOfStartDates[1] - arryOfEndDates[0]) / (24 * 60 * 60 * 1000);  
    let uDates = [];
    for (let i = 0; i < unavailableDays; i++){
      let date = new Date(arryOfEndDates[0]);
      date.setDate(date.getDate() + i)
      uDates.push(date);
    }
    setUnavailableDates(uDates)
  
    
  };


  const getAsDates = (arry) => {
    let dates = [];
    for (let i = 0; i < arry.length; i++) {
  
      let date = new Date(arry[i]);
      dates.push(date);
      
    }
    return dates;
  };


  useEffect(() => {
    getStartAndEndDate();
  }, []);

  useEffect(() => {

  },[unavailableDates]);

  return (
    <>
      <h5>Välj datum:</h5>
   
      <h6>Från: </h6>
      <DatePicker
        minDate={new Date()}
        maxDate={endDates[0]}
  
        value={selectedStartDate}
        selected={selectedStartDate}
        excludeDates={unavailableDates}
        onChange={(date) => setSelectedStartDate(date)}
      />
      <h6>Till: </h6>
      <DatePicker
        minDate={selectedStartDate}
        maxDate={endDates[1]}
        value={selectedEndDate}
        selected={selectedEndDate}
        excludeDates={unavailableDates}
        onChange={(date) => setSelectedEndDate(date)}
      />
      <BookingSummary
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        residenceId={props.residenceId}
      />
    </>
  );
};

export default CalendarForBooking;

