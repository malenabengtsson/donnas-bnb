import React, { useContext, useEffect, useState } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../sass/style.scss';


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
          }
          const imgStyle = {
            marginTop: "10px"
          }


          return(
          <div key={i}>
          <Card style={cardStyle} className="col-10 mx-auto" sm="12" md={{ size: 6, offset: 3 }}>
            <CardImg style={imgStyle} top width="100%" src={images[i]} alt="Card image cap" />
            <CardBody>
              <CardTitle>A nice house</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText key={residence.description}>{residence.description}</CardText>
              <Button>Button</Button>
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
