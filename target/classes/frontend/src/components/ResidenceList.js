import React, { useContext, useEffect, useState } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { SearchResidence } from '../components/SearchResidence'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Form, Input, FormGroup, Button
} from 'reactstrap';
import '../sass/style.scss';
import { Redirect } from 'react-router-dom';


let throttleSearch;
export default function ResidenceList() {
  const [ residence, updateResidence ] = useContext(ResidenceContext)
  const [searchResult, setSearchResult] = useState([])
  // const residencesArray = [];
  const [residenceArray, setResidenceArray] = useState([])
  const {residences, fetchResidences} = useContext(ResidenceContext)
  const [images, setImage] = useState([])
  const [gotoChoice, setGotoChoice] = useState(false);
  
  // Listen for updates to residence
  // (right now made by SearchResidence...)
  useEffect(() => {
    getResidences() 
  }, [])

  useEffect(() => {
    doSearch()
  }, [residenceArray])

  const doSearch = () => {
    let { searchFor } = residence;
    if (!searchFor) { return; }

    residenceArray.forEach(res => {
      if (res.address_id.city == residence.searchFor.city) {
        console.log('Found')
      }
      else {
        console.log('Not found')
      }
  
    })


    setSearchResult([
      {
        id: 1, res: JSON.stringify(searchFor, '', '  '),
      },
    ]);
    console.log(searchResult)
  }

  const getResidences = async () => {
    let res = await fetch('/rest/residences')
    res = await res.json()
    let result = []
    res.forEach(el => {
      result.push(el)
    })
    setResidenceArray(result)
  }
  
  const getImages = async () => {
    let res = await fetch('/rest/images')
    res = await res.json()
    let arrayOfImages = []
  
    res.forEach(image => {
      if (image.residence_id.id === 1) {
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
        return searchResult.map((residence, i) => {

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
                    key={residenceArray.title}
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
      <div>
        {gotoChoice && <Redirect to="/about-residence" />}
        <Container>
          <Form className="row"
          onSubmit={doSearch}>
          <FormGroup className="col-5 mx-auto">
              <Input
                value={residence.searchFor.city}
                type="text"
                id="city"
                placeholder="Skriv en stad..."
                onChange={e => updateResidence({
                  searchFor:
                  {
                    city: e.target.value,
                    checkIn: residence.searchFor.checkIn,
                    checkOut: residence.searchFor.checkOut
                  }
              
                })}
            />
            </FormGroup>
            <Button
              onClick={doSearch}
            color="success"
            className="col-2">Sök</Button>
            </Form>
        {list()}
        </Container>
      </div>
    );
  }
