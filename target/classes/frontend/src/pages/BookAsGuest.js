import React, {useContext, useEffect, useState} from 'react'
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg, Row, Form, FormGroup, Input, Button } from 'reactstrap'
import {ResidenceContext} from '../contexts/ResidenceContextProvider'
import { useParams } from 'react-router-dom'

const BookAsGuest = (props) => {

    //const {residences} = useContext(ResidenceContext)
    const [images, setImage] = useState([])
    let { id } = useParams()

    console.log("BaG props ", props)
    const getImages = async () => {
        let res = await fetch('/rest/images')
        res = await res.json()
         let arrayOfImages = []
      
        res.forEach(image => {
          if (image.residence_id === id) {
            arrayOfImages.push(image.img_path)
          }
        })
        setImage(arrayOfImages)
      }

    //   const getPriceFromDb = async () => {
    //     console.log(residence)
    //     let res = await fetch('/rest/residences/' + props.residenceId)
    //     res = await res.json()
    //     setResidence(res)
    //   //  return res
    // }

      useEffect(() => {
        getImages()
      }, [])

    const cardStyle = {
        textAlign: "center",
        marginTop: "15px", 
        marginBottom: "15px", 
        backgroundColor: "#F5F5DC"
      }
    const imgStyle = {
        marginTop: "15px"
    }
    const {residences} = useContext(ResidenceContext)
    console.log(residences)

    return(
    <div>
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
                 src={images[1]}
                 alt="Card image cap"
                  
                /> 

                <CardBody>
                  <CardTitle
                    // style={{ fontWeight: "bold" }}
                    //key={residence.title}
                  >
                    Hej
                    {id}
                  </CardTitle>
                  
                   <CardText>
                     {/* key={residence.price_per_night}> */}
                     {/* Kostnad per natt: {residence.price_per_night}kr{" "} */}
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
            </div>
            )

}
export default BookAsGuest