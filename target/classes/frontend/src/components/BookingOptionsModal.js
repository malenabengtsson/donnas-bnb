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

  //const [show, setShow] = useState(props.show)
  //const toggle = () => props.handleShow();
//   useEffect(() => {
//     setShow(props.show);
// }, [props.show])
  
  
if(!props.isModalOpen){
  return(
    null
  )
}
else{
  return (
    <div>
      <Modal isOpen={toggle}>
        <ModalHeader color="success">Välj hur du vill fortsätta</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Col sm={10}>
               <Button>
                 Logga in
               </Button>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col sm={10}>
            <Button>
                 Registrera dig
               </Button>
               </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={10}>
              <Button>
                 Fortsätt som gäst
               </Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Boka</Button>{" "}
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
