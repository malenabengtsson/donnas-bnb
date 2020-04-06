import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';


const BookAsGuestModal = (props) =>{

        const {
          buttonLabel,
          className
        } = props;
      
        const [modal, setModal] = useState(false);
      
        const toggle = () => setModal(!modal);

        const modalHeaderStyle = {
            
            backgroundColor: "#28A745",
            color: "White",
            
          } 

    return (
      <div>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader style={modalHeaderStyle} toggle={toggle}>Boka som gäst</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="fullNameInput"
                    placeholder="För- och efternamn"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input
                    type="email"
                    id="emailInput"
                    placeholder="Email"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input
                    type="number"
                    id="phoneNumberInput"
                    placeholder="Telefonnummer"
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Boka
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Avbryt
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );

    
}
export default BookAsGuestModal;