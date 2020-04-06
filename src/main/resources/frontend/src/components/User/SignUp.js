import React, { useState, useContext } from 'react'
import { 
    Col, 
    Row, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Card} from 'reactstrap';
import { UserContext } from '../../contexts/UserContextProvider'

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const register = async (e) =>{
        e.preventDefault()

        if (!firstName.trim() || !lastName.trim() || phoneNumber.length < 8 || !email.trim() || !password.trim()){
            return
        }

        let fullName = firstName + ' ' + lastName

        const userInfo = {
            fullName,
            email,
            password,
            phoneNumber
        }
        console.log(userInfo)
        let response = await fetch('/auth/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo)
        })

        try {
            response = await response.json()
            setUser(response)
        } catch {
            console.log('Bad credentials')
        }
        
    }

    const cardStyle = {
      textAlign: "center",
      margin: "15px",  
      backgroundColor: "#F5F5DC"
    }

    const divStyle = {
      textAlign: "center",
      margin: "15px",  
    }

    return (
    <Card style={cardStyle}>
      <div style={divStyle}>
        <Form onSubmit={register} >
        <Row form>
          <Col md={6}>
            <FormGroup>
                <Label for="user-first-name" className="float-left">Förnamn:</Label>
                <Input 
                    required
                    type="text" 
                    name="first-name" 
                    id="user-first-name" 
                    placeholder="Skriv in dit förnamn"
                    value={firstName} 
                    onChange={e => setFirstName(e.target.value)}
                    />
            </FormGroup>
          </Col>
          <Col md={6}>
              <FormGroup>
                <Label for="user-last-name" className="float-left">Efternamn:</Label>
                <Input
                    required 
                    type="text" 
                    name="last-name" 
                    id="user-last-name" 
                    placeholder="Skriv in dit efternamn" 
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
              </FormGroup>
          </Col>
          <Col md="6" >
              <FormGroup>
                  <Label for="user-phone-number" className="float-left">Telefonnummer:</Label>
                  <Input
                    required 
                    type="number" 
                    name="phone-number" 
                    id="user-phone-number" 
                    placeholder="Skriv in dit telefonnummer" 
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    />
              </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="user-email" className="float-left">E-post:</Label>
              <Input
                required 
                type="email" 
                name="email" 
                id="user-email" 
                placeholder="Skriv in din E-post" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="user-password" className="float-left">Lösenord:</Label>
              <Input
                required 
                type="password" 
                name="password" 
                id="user-password" 
                placeholder="Skriv in ett lösenord" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </FormGroup>
          </Col>
        </Row>
        <Button className="btn btn-success">Registrera dig</Button>
      </Form>
      </div>
    </Card>
    )
}

export default SignUp