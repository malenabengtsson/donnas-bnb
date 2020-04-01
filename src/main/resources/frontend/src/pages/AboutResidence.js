import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'reactstrap'

import Slideshow from '../components/AboutResidenceComponents/Carousel'
import NumberOfGuests from '../components/AboutResidenceComponents/NumberOfGuests'
import NumberOfBeds from '../components/AboutResidenceComponents/NumberOfBeds'
import DescriptionOfHouse from '../components/AboutResidenceComponents/DescriptionOfHouse'
import ResidenceAmenity from '../components/AboutResidenceComponents/ResidenceAmenity'
import CalendarForBooking from '../components/AboutResidenceComponents/CalendarForBooking'


const AboutResidence = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date()) 

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
            <Row>
                <Col>
                    <Slideshow residenceId={1}/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <NumberOfBeds className="col-5" residenceId={1} /> 
                    <NumberOfGuests className="col-5" residenceId={1} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <DescriptionOfHouse residenceId={1} />
                </Col>
            </Row>
            <Row>
                <Col sm="10" md={{ size: 3, offset: 5}} >
                    <ResidenceAmenity residenceId={1} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <CalendarForBooking residenceId={1} startingDate={setStartDate} endingDate={setEndDate} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    
                </Col>
            </Row>
            </div>
        </Card>
    )
}

export default AboutResidence