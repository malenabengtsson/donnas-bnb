import React, { useContext, useEffect, useState } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { SearchResidence } from '../components/SearchResidence'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Form, Input, FormGroup, Button
} from 'reactstrap';
import '../sass/style.scss';
import { withRouter } from 'react-router-dom';


let throttleSearch;
function ResidenceList(props) {
  const [residence, updateResidence] = useContext(ResidenceContext)
  const [searchResult, setSearchResult] = useState([])
  // const residencesArray = [];
  const [residenceArray, setResidenceArray] = useState([])
  const { residences, fetchResidences } = useContext(ResidenceContext)
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
  
  useEffect(() => {
    getImages()
  }, [searchResult])

  const doSearch = () => {
    let { searchFor } = residence;
    if (!searchFor) { return; }

    setSearchResult(residenceArray.filter(
      (sortedResidence) =>
        sortedResidence.address_id.city == residence.searchFor.city
    ));
    setTimeout(() => {
    
      console.log(searchResult)
    }, 50)
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
    if (searchResult.length == 0) {
    }
    else {
      
      let res = await fetch('/rest/images')
      res = await res.json()
      let arrayOfImages = []
      searchResult.forEach(search => {
        console.log(search)
        res.forEach(image => {
          if (image.residence_id.id == search.id) {
            console.log('success')
            arrayOfImages.push(image.img_path)
            setImage(arrayOfImages)
          }
    
        })
      })
    }
  }

  const gotoResidence = id => {
   props.history.push('/residences/' + id)
  };

  const list = () => {
    if (searchResult.length < 1) {
    }
    else {
      return searchResult.map((res, i) => {

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
                onClick={() => gotoResidence(res.id)}
              />

              <CardBody>
                <CardTitle
                  style={{ fontWeight: "bold" }}
                  key={res.title}
                >
                  {res.title}
                </CardTitle>
                <CardSubtitle key={res.description}>
                  {res.description}
                </CardSubtitle>
                <CardText key={res.price_per_night}>
                  Kostnad per natt: {res.price_per_night}kr{" "}
                </CardText>
              </CardBody>
            </Card>
          </div>
        );
      })
    }
  }
  
  
    return (
      <div>
        {/* {gotoChoice && <Redirect to={"/residences/" + searchResult[0].sortedResidence.id} />} */}
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
  export default withRouter(ResidenceList)
