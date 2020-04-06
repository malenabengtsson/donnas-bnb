import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Input
} from "reactstrap";
import BookingSummary from "./AboutResidenceComponents/BookingSummary";

const BookingOptionsModal = (props) => {
  
if(!props.isOpen){
  return(
    null
  )
}
else{
  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <ModalHeader color="success">Välj hur du vill fortsätta</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Col sm={15} className="col text-center">
               <Button className="btn btn-success col-5">
                 Logga in
               </Button>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col sm={15} className="col text-center">
            <Button className="btn btn-success col-5">
                 Registrera dig
               </Button >
               </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={15} className="col text-center">
              <Button className="btn btn-success col-5">
                 Fortsätt som gäst
               </Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Avbryt
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
};
export default BookingOptionsModal;
