import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Card, Form, Row, Col } from "reactstrap";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  let images = [];

  const cardStyle = {
    margin: "15px",
    backgroundColor: "#F5F5DC",
  };

  const divStyle = {
    margin: "15px",
  };

  const filesChange = async (fileList) => {
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
    const rental = {
      image: images[0],
      title: title,
      description: description,
      wifi: wifi,
      tv: tv,
      shower: shower,
      bathtub: bathtub,
      balcony: balcony,
      washing_machine: washingMachine,
      kitchen: kitchen,
      pool,
      pool,
      free_parking: freeParking,
      air_conditioner: airConditioner,
      start_date: startDate,
      end_date: endDate,
      price_per_night: price * 1.15,
    };

    let res = await fetch("/rest/residences/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rental),
    });

    res = await res.json();

    console.log(res);

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
          <Row>
            <Col>
              <Label>Address:</Label>
              <Input
                required
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Row>
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
              <Label>Välj datum för uthyrning:</Label>
              <br></br>
              <Label>Från:</Label>
              <br></br>
              <DatePicker selected={startDate} onChange={handleStartDate} />
              <br></br>
              <br></br>
              <Label>Till:</Label>
              <br></br>
              <DatePicker selected={endDate} onChange={handleEndDate} />
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
          <Col>
            <Row>
              <Button className="btn btn-success">Lägg till fastighet</Button>
            </Row>
          </Col>
        </Form>
      </div>
    </Card>
  );
};

export default withRouter(ResidenceForRental);
