import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const HouseRental = () => {
  return (
    <Form>
      <h1 className="text-center">Lägg till bostad</h1>
      <FormGroup row>
        <Label for="select-image" sm={2}>Ladda upp bilder</Label>
        <Col sm={10} >
          <Input type="file" name="image" id="select-image"/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="title-input" sm={2}>
          Rubrik
        </Label>
        <Col sm={6}>
          <Input type="textarea" name="text" id="title-input" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description-input" sm={2}>
          Beskrivning
        </Label>
        <Col sm={8}>
          <Input type="textarea" name="text" id="description-input" />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="checkbox2" sm={2}>
          Bekvämligheter
        </Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="wifi-checkbox" /> Wifi
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="kitchen-checkbox" /> Kök
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="shower-checkbox" /> Dusch
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="bathtub-checkbox" /> Badkar
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="free-parking-checkbox" /> Gratis parkering
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="washing-machine-checkbox" /> Tvättmaskin
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="patio-checkbox" /> Uteplats
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="balcony-checkbox" /> Balkong
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="pool-checkbox" /> Pool
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="tv-checkbox" /> TV
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Lägg till för uthyrning</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default HouseRental;
