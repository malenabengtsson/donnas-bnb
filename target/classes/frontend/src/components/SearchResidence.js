import React, { useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Card, Container } from 'reactstrap';
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import DatePicker from 'react-datepicker'
import { Redirect } from 'react-router-dom'

let throttleSearch;

export default function SearchResidence() {

  const [city, setCity] = useState('')
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date())
  const [residence, updateResidence] = useContext(ResidenceContext);
  const [gotoSearch, setGotoSearch] = useState(false);

  const initSearch = (e) => {
    e.preventDefault()
    // update the context
    // (residenceList will get this)
    updateResidence({ searchFor: { city, checkIn, checkOut } })
    setGotoSearch(true);
  }



  return (
    <div className="search-result">
      {gotoSearch && <Redirect to="/residences" />}
      <Container>
        <Card>
          <Form className="row" onSubmit={initSearch}>
            <FormGroup className="col-10 mx-auto">
              <Label for="city">Var</Label>
              <Input
                type="text"
                id="city"
                placeholder="Skriv en stad..."
                onChange={(e) => setCity(e.target.value)}
              />
            </FormGroup>
            {/* <FormGroup className="col-lg-3 col-sm-10 mx-auto">
            <Label for="check-in">Incheckning</Label>
          </FormGroup> */}
            <FormGroup className="col-lg-5 col-sm-10 mx-auto">
              <Label for="check-in">Incheckning</Label>
              <DatePicker
                id="check-in"
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()}
                value={checkIn}
                dateFormat="dd/MM/yyyy"
              />
            </FormGroup>
            {/* <FormGroup className="col-lg-2 col-sm-10 mx-auto">
            <Label for="check-out">Utcheckning</Label>
          </FormGroup> */}
            <FormGroup className="col-lg-5 col-sm-10 mx-auto">
              <Label for="check-out">Utcheckning</Label>
              <DatePicker
                id="check-out"
                minDate={checkIn}
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                value={checkOut}
                dateFormat="dd/MM/yyyy"
              />
            </FormGroup>
            <Button
              onClick={initSearch}
              color="success"
              className="col-5 mx-auto"
            >
              Sök
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
