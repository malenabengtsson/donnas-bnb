import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Spinner, Button } from 'reactstrap'
import { useParams, withRouter } from 'react-router-dom'

import Slideshow from '../components/AboutResidenceComponents/Carousel'
import NumberOfGuests from '../components/AboutResidenceComponents/NumberOfGuests'
import NumberOfBeds from '../components/AboutResidenceComponents/NumberOfBeds'
import DescriptionOfHouse from '../components/AboutResidenceComponents/DescriptionOfHouse'
import ResidenceAmenity from '../components/AboutResidenceComponents/ResidenceAmenity'
import BookedResidence from '../components/AboutResidenceComponents/BookedResidence'


const ModifiedAboutResidence = (props) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date()) 
    const [price, setPrice] = useState(999)
    const [residence, setResidence] = useState(null)
    const { id } = useParams()
    const { bookingId } = useParams()

    const getResidence = async () => {
        let res = await fetch('/rest/residences/' + id)
        res = await res.json()
        setResidence(res)
    }

    const getBooking = async () => {
        let res = await fetch('/rest/bookings/' + bookingId)
        res = await res.json()
        setStartDate(res.start_date)
        setEndDate(res.end_date)
        setPrice(res.total_price)
    }

    useEffect(() => {
        getResidence()
        getBooking()
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

      const goBackToMyPage = () => {
          props.history.goBack()
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
                    <BookedResidence startDate={startDate} endDate={endDate} totalPrice={price}/>
                    <Button className="btn btn-success float-right" onClick={() => goBackToMyPage()}>Tillbaka</Button>
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

export default withRouter(ModifiedAboutResidence)