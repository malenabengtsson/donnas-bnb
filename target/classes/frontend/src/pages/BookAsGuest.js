import React, {useContext, useEffect, useState} from 'react'
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg, Row, Form, FormGroup, Input, Button } from 'reactstrap'
import {ResidenceContext} from '../contexts/ResidenceContextProvider'
import { useParams } from 'react-router-dom'
import { disconnect } from 'mongoose'

const BookAsGuest = (props) => {

    const [residence, setResidence] = useState(null)
    let {id} = useParams()

    const getResidence = async () => {

     // let id = props.match.params.id
      let res = await fetch('/rest/residences/' + id)
      res = await res.json()
      console.log(res)
      setResidence(res)
    }
   
    useEffect(() => {
      getResidence()
    },[])

    console.log("BaG props ", props)

    const cardStyle = {
        textAlign: "center",
        marginTop: "15px", 
        marginBottom: "15px", 
        backgroundColor: "#F5F5DC"
      }
    const imgStyle = {
        marginTop: "15px"
    }

    return(
    <div>
      {residence ? 
              <Card
                style={cardStyle}
                className="col-10 mx-auto"
                sm="12"
                md={{ size: 6, offset: 3 }}
              >
                 <CardImg 
                 style={imgStyle}
                 top
                 width="100%"
                 src={residence.images[0].img_path}
                  
                /> 

                <CardBody>
                  <CardTitle
                     style={{ fontWeight: "bold" }}
                    key={residence.title}
                  >
                    {residence.title}
                    
                  </CardTitle>
                  
                   <CardText>
                     <div key={residence.price_per_night}>
                      Kostnad per natt: {residence.price_per_night}kr
                      </div>
                      {/* <div key={residence.addresses.street}>
                        {residence.addresses.street}
                      </div> */}

                     <Form>
                     <FormGroup>
                         <Input className="col-lg-4 col-sm-10 mx-auto" type="text" placeholder="För- och efternamn"> </Input>
                         </FormGroup>
                         <FormGroup>    
                         <Input className="col-lg-4 col-sm-10 mx-auto" type="email" placeholder="Email"> </Input>
                         </FormGroup>
                         <FormGroup>  
                         <Input className="col-lg-4 col-sm-10 mx-auto" type="text" placeholder="Telefonnummer"> </Input>
                     </FormGroup>
                     <FormGroup>
                         <Button color="success">
                             Boka
                         </Button>
                     </FormGroup>
                     </Form>
                  </CardText> 
                </CardBody>
              </Card>
              :''}
            </div>
            )

}
export default BookAsGuest