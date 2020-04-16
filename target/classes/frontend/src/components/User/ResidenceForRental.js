import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Card, Form, Row, Col } from "reactstrap";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";

const ResidenceForRental = () => {
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

  const addRental = async (e) => {};

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
