import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Spinner } from 'reactstrap'
import { useParams } from 'react-router-dom'

import Slideshow from '../components/AboutResidenceComponents/Carousel'
import NumberOfGuests from '../components/AboutResidenceComponents/NumberOfGuests'
import NumberOfBeds from '../components/AboutResidenceComponents/NumberOfBeds'
import DescriptionOfHouse from '../components/AboutResidenceComponents/DescriptionOfHouse'
import ResidenceAmenity from '../components/AboutResidenceComponents/ResidenceAmenity'
import CalendarForBooking from '../components/AboutResidenceComponents/CalendarForBooking'
import AdvertiserInformation from '../components/AboutResidenceComponents/AdvertiserInformation'



const AboutResidence = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date()) 
    const [residence, setResidence] = useState(null)
    const { id } = useParams()

    const getResidence = async () => {
        let res = await fetch('/rest/residences/' + id)
        res = await res.json()
        setResidence(res)

        setTimeout(() => {
            console.log(residence)
        }, 50)
    }
    useEffect(() => {
        getResidence()
    }, [])

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
        <div>
            {residence ? (
                <>
            <Card style={cardStyle}>
            <div style={divStyle}>
            <Row>
                <Col>
                    <Slideshow residenceId={residence.images}/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <NumberOfBeds className="col-5" NumberOfBeds={residence.beds} /> 
                    <NumberOfGuests className="col-5" NumberOfGuests={residence.max_guests} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <DescriptionOfHouse DescriptionOfHouse={residence.description} />
                </Col>
            </Row>
            <Row>
                <Col sm="10" md={{ size: 4, offset: 4}} >
                    <ResidenceAmenity ResidenceAmenity={residence.amenity_profile_id} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <CalendarForBooking residenceId={id} startingDate={setStartDate} endingDate={setEndDate} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    
                </Col>
            </Row>
            </div>
                    </Card>
                </>)
                    :<Spinner color="success" />}
            </div>
    )
}

export default AboutResidence