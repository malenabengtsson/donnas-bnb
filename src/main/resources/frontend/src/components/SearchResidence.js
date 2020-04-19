import React, { useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { Redirect } from 'react-router-dom'


export default function SearchResidence() {

  const [city, setCity] = useState('')
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date())
  const [residence, updateResidence] = useContext(ResidenceContext);
  const [gotoSearch, setGotoSearch] = useState(false);

  const initSearch = (e) => {
    e.preventDefault()

    updateResidence({ searchFor: { city, checkIn, checkOut } })
    setGotoSearch(true);
  }



  return (
    <div className="search-result">
      {gotoSearch && <Redirect to="/residences" />}
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
          
            <Button
              onClick={initSearch}
              color="success"
              className="col-5 mx-auto"
            >
              Sök
            </Button>
          </Form>
    
    </div>
  );
}
