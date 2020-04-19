import React, { useState, useContext } from "react";
import { Card, FormGroup, Col, Label, Input, Form, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { UserContext } from '../../contexts/UserContextProvider' 
import { withRouter } from 'react-router-dom'

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [goToChoice, setGoToChoice] = useState(false)
  const { fetchUser } = useContext(UserContext)

  const cardStyle = {
    textAlign: "center",
    margin: "15px",
    backgroundColor: "#F5F5DC",
  };

  const divStyle = {
    textAlign: "center",
    margin: "15px",
    backgroundColor: "rgb(245, 245, 220)",
  };

  const springLogin = async (e) => {
    e.preventDefault()

    const credentials = 'username=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password)

    let response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: credentials
    })

    if(response.url.includes('error')) {
      console.log('Wrong username or password')
    }else {
      fetchUser()
      props.history.push('/my-page')
    }
  }

  return (
    <Card style={cardStyle}>
        {goToChoice && <Redirect to="/my-page" />}
      <div style={divStyle}>
       <Form onSubmit={springLogin}>
        <Col md={6}>
          <FormGroup>
            <Label for="user-email" className="float-left">
              E-post:
            </Label>
            <Input
              required
              type="email"
              name="email"
              id="user-email"
              placeholder="Ange e-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="user-password" className="float-left">
              Lösenord:
            </Label>
            <Input
              required
              type="password"
              name="password"
              id="user-password"
              placeholder="Ange lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Button className="btn btn-success">Logga in</Button>
        </Form>
      </div>
    </Card>
  );
};

export default withRouter(SignIn)
