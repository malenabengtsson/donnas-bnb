import React, { useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import DatePicker from 'react-date-picker'
import { Redirect } from 'react-router-dom'

let throttleSearch;

export default function SearchResidence() {

  const [city, setCity] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
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
    <div>
      {gotoSearch && <Redirect to="/residences" />}
      <Container>
        <Form className="row"
          onSubmit={initSearch}>
          <FormGroup className="col-10 mx-auto">
            <Label for="city">Var</Label>
            <Input
              type="text"
              id="city"
              placeholder="Skriv en stad..."
              onChange={e => setCity(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-4 mx-auto">
            <Label for="check-in">Incheckning</Label>
            <Input
              id="check-in"
              type="date"
              onChange={e => setCheckIn(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-4 mx-auto">
            <Label for="check-out">Utcheckning</Label>
            <Input
              id="check-out"
              type="date"
              onChange={e => setCheckOut(e.target.value)}
            />
          </FormGroup>
          <Button
            onClick={initSearch}
            color="success"
            className="col-5 mx-auto">Sök</Button>

        </Form>
      </Container>
    </div>

  )
}
