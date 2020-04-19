import React, { useState, useEffect } from "react";
import { Row, Col, Card, Spinner, Button } from "reactstrap";
import { useParams, withRouter } from "react-router-dom";

import Slideshow from "../components/AboutResidenceComponents/Carousel";
import NumberOfGuests from "../components/AboutResidenceComponents/NumberOfGuests";
import NumberOfBeds from "../components/AboutResidenceComponents/NumberOfBeds";
import DescriptionOfHouse from "../components/AboutResidenceComponents/DescriptionOfHouse";
import ResidenceAmenity from "../components/AboutResidenceComponents/ResidenceAmenity";
;

const AboutRental = (props) => {
  const [rental, setRental] = useState(null);
  const [residence, setResidence] = useState(null);
  const { id, availablePeriodId } = useParams();


  const getRental = async () => {
    let res = await fetch("/rest/availablePeriods/" + availablePeriodId);
    res = await res.json();
    setRental(res);
    
  };

  const getResidence = async () => {
    let res = await fetch("/rest/residences/" + id);
    res = await res.json();
    setResidence(res);
  };



  useEffect(() => {
    getRental();
    getResidence()
  }, []);

  useEffect(() => {
    
  },[residence])

  const cardStyle = {
    textAlign: "center",
    margin: "15px",
    backgroundColor: "#F5F5DC",
  };
  const divStyle = {
    textAlign: "center",
    margin: "15px",
  };

  const goBackToMyPage = () => {
    props.history.goBack();
  };

  return (
    <div>
      {residence ? (
        rental ? (
        <>
          <Card style={cardStyle}>
            <div style={divStyle}>
              <Row>
                <Col>
                  <Slideshow residenceId={residence.images} />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <NumberOfBeds
                    className="col-5"
                    NumberOfBeds={rental.residence_id.beds}
                  />
                  <NumberOfGuests
                    className="col-5"
                    NumberOfGuests={rental.residence_id.max_guests}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <DescriptionOfHouse
                    DescriptionOfHouse={rental.residence_id.description}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="10" md={{ size: 4, offset: 4 }}>
                  <ResidenceAmenity
                    ResidenceAmenity={rental.residence_id.amenity_profile_id}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">

                  <Button
                    className="btn btn-success float-right"
                    onClick={() => goBackToMyPage()}
                  >
                    Tillbaka
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="text-center"></Col>
              </Row>
            </div>
          </Card>
        </>) : ('')
      ) : (
        <Spinner color="success" />
      )}
    </div>
  );
};

export default withRouter(AboutRental);
