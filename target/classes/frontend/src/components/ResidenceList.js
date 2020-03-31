import React, { useContext, useEffect, useState } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../sass/style.scss';
import { Link } from 'react-router-dom';


export default function ResidenceList() {
  const {residences} = useContext(ResidenceContext)
  const [images, setImage] = useState([])

  const getImages = async () => {
    let res = await fetch('/rest/images')
    res = await res.json()
    let arrayOfImages = []
    // console.log(res)
    res.forEach(image => {
      if (image.residence_id === 1) {
        arrayOfImages.push(image.img_path)
      }
    })
    setImage(arrayOfImages)
  }

  useEffect(() => {
    getImages()
  }, [])

    const list = () => {
        return residences.map((residence, i) => {

          const cardStyle = {
            textAlign: "center",
            marginTop: "15px", 
            marginBottom: "15px", 
            backgroundColor: "lightgray",
          }
          const imgStyle = {
            marginTop: "10px",
            border: "1px solid gray"
          }

          return(
          <div key={i}>
          <Card 
          style={cardStyle} 
          className="col-10 mx-auto" 
          sm="12" 
          md={{ size: 6, offset: 3 }}>
             <Link to="">
            <CardImg 
            style={imgStyle} 
            top width="100%" 
            src={images[i]} 
            alt="Card image cap" 
            />
            </Link>
            <CardBody>
              <CardTitle style={{fontWeight: "bold"}} key={residence.title}>{residence.title}</CardTitle>
              <CardSubtitle key={residence.description}>{residence.description}</CardSubtitle>
              <CardText key={residence.price_per_night}>Kostnad per natt: {residence.price_per_night}kr </CardText>
            </CardBody>

          </Card>
        </div>
          )
        })
            // return (
            //     <div>
            //     <p key={residence.id + i}>Recidence id: {residence.id}</p>
            // <p key={residence.max_guests + i}>Max Guests: {residence.max_guests}</p>
            //     </div>

            // )
     //   })
          
    }
  
  
    return (
      <>
        {list()}
      </>
    )
  }
