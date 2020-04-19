import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Card, Form, Row, Col } from "reactstrap";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {UserContext} from '../../contexts/UserContextProvider'
import { RentalContext } from '../../contexts/RentalContextProvider'

const ResidenceForRental = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [wifi, setWifi] = useState(false);
  const [tv, setTv] = useState(false);
  const [shower, setShower] = useState(false);
  const [bathtub, setBathtub] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [washingMachine, setWashingMachine] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [pool, setPool] = useState(false);
  const [freeParking, setFreeParking] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [nrOfGuest, setNrOfGuests] = useState(0)
  const [nrOfBeds, setNrOfBeds] = useState(0)

  const [street, setStreet] = useState('')
  const [streetNumber, setStreetNumber] = useState(0)
  const [zipCode, setZipCode] = useState(0)
  const [city, setCity] = useState('')

  const { user } = useContext(UserContext)

  const [userId, setUserId] = useState(null)

  let images = [];

  const cardStyle = {
    margin: "15px",
    backgroundColor: "#F5F5DC",
  };

  const divStyle = {
    margin: "15px",
  };

  useEffect(() => {
    getUserId()
  })

  const getUserId = () => {
    if(userId === null) return
    if(user !== null){
        setUserId(user.id)
    }
    
}

  const filesChange = async fileList => {
    // handle file changes
    const formData = new FormData();

    if (!fileList.length) return;

    // append the files to FormData
    Array.from(Array(fileList.length).keys()).map((x) => {
      formData.append("files", fileList[x], fileList[x].name);
    });

    let response = await fetch("/api/upload-files", {
      method: "POST",
      body: formData,
    }).catch(console.warn);

    response = await response.json();
    images = response;
    console.log(response)
  };

  const addRental = async (e) => {
    e.preventDefault();


    if (wifi === true) setWifi(1);
    if (tv === true) setTv(1);
    if (shower === true) setShower(1);
    if (bathtub === true) setBathtub(1);
    if (balcony === true) setBalcony(1);
    if (washingMachine === true) setWashingMachine(1);
    if (kitchen === true) setKitchen(1);
    if (pool === true) setPool(1);
    if (freeParking === true) setFreeParking(1);
    if (airConditioner === true) setAirConditioner(1);

    // TODO address, dates and price
    const amenityObj = {
      wifi: wifi,
      tv: tv,
      shower: shower,
      bathtub: bathtub,
      balcony: balcony,
      washing_machine: washingMachine,
      kitchen: kitchen,
      pool: pool,
      free_parking: freeParking,
      air_conditioner: airConditioner
    }

    // let amenityResponse = await fetch('/rest/amenityProfiles/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(amenityObj)
    // })

    // amenityResponse = await amenityResponse.json()

    const addressObj = {
      street: street,
      street_number: streetNumber,
      zip_code: zipCode,
      city: city
    }

    // let addressResponse = await fetch('/rest/addresses/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(addressObj)
    // })

    // addressResponse = await addressResponse.json()
   

    let residenceObj = {
      max_guests: nrOfGuest,
      amenity_profile_id: amenityObj,
      address_id: addressObj,
      user_id: user.id,
      description: description,
      beds: nrOfBeds,
      title: title,
      price_per_night: price * 1.15
    }

    let residenceResponse = await fetch('/rest/residences/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(residenceObj)
    })

    residenceResponse = await residenceResponse.json()

    let imageObj = {
      residenceId: await residenceResponse.id,
      img_path: images[0]
    };


    let imageResponse = await fetch("/rest/images/", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(imageObj),
    });

    imageResponse = await imageResponse.json();

 const availablePeriodsObj = {
   residence_id: await residenceResponse,
   start_date: startDate,
   end_date: endDate
 };

 let availablePeriodsResponse = await fetch('/rest/availablePeriods/', {
   method: 'POST',
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(availablePeriodsObj),
 })
   
   availablePeriodsResponse = await availablePeriodsResponse.json();



    // TODO append residence list
    //  clearInputFields();

    // props.history.push("/");
  };

  const clearInputFields = () => {
    setTitle("");
    setDescription("");
    setWifi(false);
    setTv(false);
    setShower(false);
    setBathtub(false);
    setBalcony(false);
    setWashingMachine(false);
    setKitchen(false);
    setPool(false);
    setFreeParking(false);
    setAirConditioner(false);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

  let monthNames = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  const getDateAsText = () => {
    let startDateText =
      startDate.getDay() +
      " " +
      monthNames[startDate.getMonth()] +
      " " +
      startDate.getFullYear();

    let endDateText =
      endDate.getDay() +
      " " +
      monthNames[endDate.getMonth()] +
      " " +
      endDate.getFullYear();

    return startDateText + " - " + endDateText;
  };

  return (
    <Card style={cardStyle}>
      <div style={divStyle}>
        <h1 className="text-center">Lägg till bostad</h1>
        <Form onSubmit={addRental}>
          <br></br>
          <Row>
            <Col>
              <Label>Rubrik:</Label>
              <Input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Beskrivning:</Label>
              <Input
                required
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </Row>
          <Col>
            <Row>
              <Label>Address:</Label>
            </Row>
            <Row>
              <Label>Väg:</Label>
              <Input
                type="text"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </Row>
            <Row>
              <Label>Väg nummer:</Label>
              <Input
                type="text"
                required
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
              />
            </Row>
            <Row>
              <Label>Postnummer:</Label>
              <Input
                type="number"
                required
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Row>
            <Row>
              <Label>Stad:</Label>
              <Input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Row>
          </Col>
          <br></br>
          <Label>Bekvämligheter:</Label>
          <Col style={{ marginLeft: "22px" }}>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="wifi-check"
                  value={wifi}
                  onChange={(e) => setWifi(!wifi)}
                />
                Wifi
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="tv-check"
                  value={tv}
                  onChange={(e) => setTv(!tv)}
                />
                TV
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="shower-check"
                  value={shower}
                  onChange={(e) => setShower(!shower)}
                />
                Dusch
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="bathtub-check"
                  value={bathtub}
                  onChange={(e) => setBathtub(!bathtub)}
                />
                Badkar
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="balcony-check"
                  value={balcony}
                  onChange={(e) => setBalcony(!balcony)}
                />
                Balkong
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="washing-machine-check"
                  value={washingMachine}
                  onChange={(e) => setWashingMachine(!washingMachine)}
                />
                Tvättmaskin
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="kitchen-check"
                  value={kitchen}
                  onChange={(e) => setKitchen(!kitchen)}
                />
                Kök
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="pool-check"
                  value={pool}
                  onChange={(e) => setPool(!pool)}
                />
                Simbassäng
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="free-parking-check"
                  value={freeParking}
                  onChange={(e) => setFreeParking(!freeParking)}
                />
                Gratis parkering
              </Label>
            </Row>
            <Row>
              <Label>
                <Input
                  type="radio"
                  name="air-conditioner-check"
                  value={airConditioner}
                  onChange={(e) => setAirConditioner(!airConditioner)}
                />
                Luftkonditionering
              </Label>
            </Row>
          </Col>
          <br></br>
          <Row>
            <Col>
              <Label>Antal sängar:</Label>
              <Input
                type="number"
                required
                value={nrOfBeds}
                onChange={(e) => setNrOfBeds(e.target.value)}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Label>Antal gäster</Label>
              <Input
                type="number"
                required
                value={nrOfGuest}
                onChange={(e) => setNrOfGuests(e.target.value)}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Label>Välj datum för uthyrning:</Label>
              <br></br>
              <Label>Från:</Label>
              <br></br>
              <DatePicker
                selected={startDate}
                onChange={handleStartDate}
                dateFormat="yyyy/MM/dd"
              />
              <br></br>
              <br></br>
              <Label>Till:</Label>
              <br></br>
              <DatePicker
                selected={endDate}
                onChange={handleEndDate}
                dateFormat="yyyy/MM/dd"
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>{getDateAsText()}</Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Label>Pris per natt:</Label>
              <Input
                required
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <p>Pris efter avgifter: {price * 1.15}</p>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Label>Ladda upp bilder:</Label>
              <Input
                required
                type="file"
                name="file"
                id="upload-image-input"
                accept=".png,.jpg,.jpeg,.gif,.bmp,.jfif"
                multiple
                onChange={(e) => filesChange(e.target.files)}
              />
            </Col>
          </Row>
          <br></br>
          <Col>
            <Row>
              <Button type="submit" className="btn btn-success">
                Lägg till fastighet
              </Button>
            </Row>
          </Col>
        </Form>
      </div>
    </Card>
  );
};

export default withRouter(ResidenceForRental);
