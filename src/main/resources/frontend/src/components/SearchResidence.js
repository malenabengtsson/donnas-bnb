import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';

export default function SearchResidence(){
    const [city, setCity] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')

    const search = (e) =>{
    e.preventDefault()
    console.log('City ' + city)
    console.log('Checkin ' + checkIn)
    console.log('Checkout ' + checkOut)
    }

    return(
        <div>
        <Container>
            <Form className="row"
            onSubmit={search}>
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
                    <Button color="success" className="col-5 mx-auto">Sök</Button>
                 
            </Form>
            </Container>
        </div>

    )
}
