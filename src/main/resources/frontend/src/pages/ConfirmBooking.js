import React, {useContext, useEffect, useState} from 'react'
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg, Row, Form, FormGroup, Input, Button } from 'reactstrap'
import {ResidenceContext} from '../contexts/ResidenceContextProvider'
import { useParams } from 'react-router-dom'
import { disconnect } from 'mongoose'
import {BookingContext} from "../contexts/BookingContextProvider"
import {UserContext} from "../contexts/UserContextProvider"

const BookAsGuest = (props) => {

  const { appendBooking } = useContext(BookingContext)
  const {thisBooking, setThisBooking} = useContext(BookingContext)
  const {appendResidence} = useContext(ResidenceContext)
  const [residence, setResidence] = useState(null)
  const [full_name, setFullName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [phone_number, setPhoneNumber] = useState(null)
  console.log(thisBooking);

    //let id = props.residenceId
     let {id} = useParams()

    const getResidence = async () => {

      

     // let id = props.match.params.id
      let res = await fetch('/rest/residences/' + id)
      res = await res.json()
      setResidence(res)
    }
   
    useEffect(() => {
      getResidence()
    },[])

    useEffect(() => {
      if(thisBooking){
        console.log(thisBooking);
      }
      else{
        console.log("Not true");
        
      }
      
    },[thisBooking])
    useEffect(() =>{
      console.log(props.date)
    },[props.date] )


    const addBooking = async (e) => {
      e.preventDefault()
      console.log('In add booking')

      let response = await fetch('/rest/bookings/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(thisBooking)
    })

    response = await response.json()

      
    console.log(response)
    appendBooking(response)

    }


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
                   <CardText>
                     <div>
                       {residence.address_id.street} {residence.address_id.street_number}
                     </div>
                     <div>
                       {residence.address_id.zip_code}  {residence.address_id.city}
                     </div>
                     <div>
                     {thisBooking.start_date} - {thisBooking.end_date}
                     </div>
                     <div key={residence.price_per_night}>
                      Kostnad per natt: {residence.price_per_night}kr
                      </div>
                      <div>
                       Totalt pris: {thisBooking.total_price}
                     </div>

              
                     <Button color="success" onClick={(addBooking)}>
                             Boka
                         </Button>
                  </CardText> 
                </CardBody>
              </Card>
              :''}
            </div>
            )

}
export default BookAsGuest