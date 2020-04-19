import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, Button, Col, Row } from 'reactstrap'
import {UserContext} from '../../contexts/UserContextProvider'

const MyBooking = (props) => {
    const { user } = useContext(UserContext)
    console.log(props.usrBookings);

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

    const toResidencePage = (id, bookingId) => {
      //  e.preventDefault()
        //console.log(e)

        props.history.push('/my-page/residence/' + id + '/' + bookingId)
    } 

    const list = () => {
        return props.usrBookings('Hello').map((booking, i) => {
            console.log(booking)
            return (
                <Card key={i} style={cardStyle}>
                <Row style={rowStyle}>
                        <img width="100px" height="100px" style={{ margin: '20px' }} src={booking.residence_id.images[0].img_path} alt="A house image" />
                    <CardBody>
                        <CardText>Address: {booking.residence_id.address_id.street}</CardText>
                        <CardText>Datum: {booking.start_date} - {booking.end_date}</CardText>
                        <Button className="btn btn-success" onClick={() => toResidencePage(booking.residence_id.id, booking.id)}>Mer info</Button>
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