import React from 'react'
import { Row, Col } from 'reactstrap'

import Slideshow from '../components/AboutResidenceComponents/Carousel'
import NumberOfGuests from '../components/AboutResidenceComponents/NumberOfGuests'
import DescriptionOfHouse from '../components/AboutResidenceComponents/DescriptionOfHouse'
import ResidenceAmenity from '../components/AboutResidenceComponents/ResidenceAmenity'
import CalendarForBooking from '../components/AboutResidenceComponents/CalendarForBooking'
import BookingSummary from '../components/AboutResidenceComponents/BookingSummary'

const AboutResidence = () => {
    return (
        <>
            <Row>
                <Col>
                    <Slideshow residenceId={1}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NumberOfGuests residenceId={1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <DescriptionOfHouse residenceId={1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ResidenceAmenity residenceId={1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CalendarForBooking />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <BookingSummary startDate={'01/03'} endDate={'03/06'} pricePerNight={799}/>
                </Col>
            </Row>
        </>
    )
}

export default AboutResidence