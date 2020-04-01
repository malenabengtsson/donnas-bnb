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

    return (
        <div >
            <Row>
                <Col>
                    <Slideshow residenceId={1}/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <NumberOfBeds residenceId={1} /> 
                    <NumberOfGuests residenceId={1} />
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
    )
}

export default AboutResidence