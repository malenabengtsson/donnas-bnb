import React, { useContext, useEffect, useState } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { SearchResidence } from '../components/SearchResidence'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import '../sass/style.scss';
import { Redirect } from 'react-router-dom';



export default function ResidenceList() {
  const [residence, updateResidence] = useContext(ResidenceContext)
  const [searchResult, setSearchResult] = useState([])
  const residences = [];
  const {residences} = useContext(ResidenceContext)
  const [images, setImage] = useState([])
  const [gotoChoice, setGotoChoice] = useState(false);

  // Listen for updates to residence
  // (right now made by SearchResidence...)
  useEffect(() => {
    let { searchFor } = residence;
    if (!searchFor) { return; }
    // thomas' comment: I would do my actual search here
    // but for now I will just fake it to show you
    // I picked up the search criterias via context
    setSearchResult([
      { id: 1, max_guests: JSON.stringify(searchFor, '', '  ') }
    ]);
  }, [residence])
  const getImages = async () => {
    let res = await fetch('/rest/images')
    res = await res.json()
    let arrayOfImages = []
  
    res.forEach(image => {
      if (image.residence_id === 1) {
        arrayOfImages.push(image.img_path)
      }
    })
    setImage(arrayOfImages)
  }

  const gotoResidence = e => {
    setGotoChoice(true);
  };

  useEffect(() => {
    getImages()
  }, [])

    const list = () => {
        return residences.map((residence, i) => {

          const cardStyle = {
            textAlign: "center",
            marginTop: "15px", 
            marginBottom: "15px", 
            backgroundColor: "#F5F5DC"
          }
          const imgStyle = {
            marginTop: "10px",
            border: "1px solid gray",
            cursor: "pointer"
          }

          return (
            <div key={i}>
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
                  src={images[i]}
                  alt="Card image cap"
                  onClick={gotoResidence}
                />

                <CardBody>
                  <CardTitle
                    style={{ fontWeight: "bold" }}
                    key={residence.title}
                  >
                    {residence.title}
                  </CardTitle>
                  <CardSubtitle key={residence.description}>
                    {residence.description}
                  </CardSubtitle>
                  <CardText key={residence.price_per_night}>
                    Kostnad per natt: {residence.price_per_night}kr{" "}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          );
        })  
    }
  
  
    return (
      <>
        {gotoChoice && <Redirect to="/about-residence" />}
        {list()}
      </>
    );
  }
