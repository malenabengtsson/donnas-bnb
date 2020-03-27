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

    const doSearch = async (city) =>{
        let res;
        if(!city.trim()){
            console.log('If ' + res)
            //Visa alla om man ej angett en stad 
            res = await fetch('/rest/residences')
        }
        else{
            console.log('Else ' + res)
            //Visa alla i staden som angetts
            //Hämtas ur addresses 
            //eventuellt lägga till /rest/residences/ + city
        }

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
                    <Button 
                    onClick={doSearch}
                    color="success" 
                    className="col-5 mx-auto">Sök</Button>
                 
            </Form>
            </Container>
        </div>

    )
}
