import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';


const Home = () =>{

    return(
        
        <div>
        <Container>
            <Form>
        <Row xs="1">
                <Col>
                <FormGroup>
                <Label for="city">Var</Label>
                <Input 
                type="text" 
                id="city" 
                placeholder="Skriv en stad..."/>
                </FormGroup>
                </Col>
            </Row>
            <Row xs="2">
                <FormGroup>
                <Label for="check-in">Incheckning</Label>
                    <Input 
                    id="check-in"
                    type="datetime"></Input>
                </FormGroup>
                <FormGroup>
                <Label for="check-out">Utcheckning</Label>
                    <Input 
                    id="check-out"
                    type="datetime"></Input>
                </FormGroup>
                </Row>
                <Row>
                <Col>
                    <Button color="success">Sök</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
        </div>
    )
}

export default Home