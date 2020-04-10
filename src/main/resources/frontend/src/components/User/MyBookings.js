import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button, Col, Row } from 'reactstrap'
import {UserContext} from '../../contexts/UserContextProvider'

const MyBooking = (props) => {
    const { user } = useContext(UserContext)

    const cardStyle = {
        textAlign: "center",
        margin: "15px",  
        backgroundColor: "#F5F5DC"
    }
    const rowStyle = {
        textAlign: "center",
        margin: "15px",  
    }

    const divStyle = {
          margin: "25px"
    }

    const toResidencePage = (e) => {
        e.preventDefault()
        
        props.history.push('/residences/2')
    } 
    
    const list = () => {
        return props.usrBookings('Hello').map((booking, i) => {
            return (
                <Card key={i} style={cardStyle}>
                <Row style={rowStyle}>
                    <img width="80px" height="80px" style={{margin: '20px'}} src={'https://icons.iconarchive.com/icons/artdesigner/urban-stories/256/House-icon.png'} alt="A house image" />
                    <CardBody>
                        <CardText>Address: {booking.residence_id.address_id.street}</CardText>
                        <CardText>Datum: {booking.start_date} - {booking.end_date}</CardText>
                        <Button className="btn btn-success" onClick={toResidencePage}>Mer info</Button>
                    </CardBody>
                </Row>
                </Card>
            )
        })    
    }

    return (
        <div style={divStyle}>
        <h3 className="text-white" style={{margin: '15px'}}>Mina bokningar</h3>
        {list()} 
        </div>
    )
}

export default withRouter(MyBooking)