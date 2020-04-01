import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import { Redirect } from 'react-router-dom'

export default function SearchResidence() {

  const [city, setCity] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [gotoSearch, setGotoSearch] = useState(false);
  const initSearch = (e) => {
    e.preventDefault()
 
    setGotoSearch(true);
  }

  return (
    <div>
      {gotoSearch && <Redirect to="/residences" />}
      <Container>
        <Form className="row" onSubmit={initSearch}>
          <FormGroup className="col-lg-10 col-sm-10 mx-auto">
            <Label for="city">Var</Label>
            <Input
              type="text"
              id="city"
              placeholder="Skriv en stad..."
              onChange={e => setCity(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-lg-4 col-sm-10 mx-auto">
            <Label for="check-in">Incheckning</Label>
            <Input
              id="check-in"
              type="date"
              onChange={e => setCheckIn(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-lg-4 col-sm-10 mx-auto">
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
            className="col-5 mx-auto"
          >
            Sök
          </Button>
        </Form>
      </Container>
    </div>
  );
}
