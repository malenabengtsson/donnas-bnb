import React, { useContext, useEffect, useState } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { SearchResidence } from "../components/SearchResidence";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Form,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
import "../sass/style.scss";
import { withRouter } from "react-router-dom";

let arrayToMap = [];
function ResidenceList(props) {
  const [residence, updateResidence] = useContext(ResidenceContext);
  const [periods, setPeriods] = useState([])
  const [searchResult, setSearchResult] = useState([]);
    const [startDates, setStartDates] = useState([]);
    const [endDates, setEndDates] = useState([]);
  // const residencesArray = [];
  const [residenceArray, setResidenceArray] = useState([]);
  

  // Listen for updates to residence
  // (right now made by SearchResidence...)
  useEffect(() => {
    getResidences();
    getPeriods();
  }, []);

  useEffect(() => {
    getPeriods();
    doSearch();
  }, [residenceArray]);

  useEffect(() => {
    console.log('periods changed')
    doSearch();
  }, [periods])

  
  useEffect(() => {
   doSearch()
  }, [startDates])

  useEffect(() => {
   doSearch()
  }, [endDates])

  const doSearch = () => {
    let { searchFor } = residence;
    if (!searchFor) {
      return;
    }

    if (searchFor.city == "") {
      return;
    }
    else{
      if (searchFor.checkIn != "" && searchFor.checkOut != "") {
        residenceArray.forEach((res) => {
          if (res.address_id.city == residence.searchFor.city) {
            periods.forEach((period) => {
              if (res.id == period.residence_id.id) {
                let startDate = searchFor.checkIn
                let endDate = searchFor.checkOut
                if(startDates.length > 0){
                  for (let i = 0; i < startDates.length; i++) {
                    if ((startDate >= startDates[i] && startDate < endDates[i]) &&
                      (endDate > startDates[i] && endDate <= endDates[i])) {
                      console.log(res.id)
                      setSearchResult(res.id)
                    }
                  }
                }
              }
              else {
                console.log('not matched')
              }
            })
            // if(res.residence_id.id )
          }
         
       })

      }
      setSearchResult(
        residenceArray.filter(
          (sortedResidence) =>
            sortedResidence.address_id.city == residence.searchFor.city
        )
      );
    }
  };

  const getResidences = async () => {
    let res = await fetch("/rest/residences");
    res = await res.json();
    let result = [];
    res.forEach((el) => {
      result.push(el);
    });
    setResidenceArray(result);
  };

  const getPeriods = async () => {
     let res = await fetch("/rest/availablePeriods");
    res = await res.json();
    setPeriods(res)
     let arrayOfStartDates = [];
    let arrayOfEndDates = [];
    residenceArray.forEach((el) => {
      res.forEach((r) => { 
        console.log(r)
        if (r.residence_id.id === el.id) {
           arrayOfStartDates.push(r.start_date);
           arrayOfEndDates.push(r.end_date);
         }
      })
     });
  
    arrayOfStartDates = getAsDates(arrayOfStartDates)
    arrayOfEndDates = getAsDates(arrayOfEndDates)
    setStartDates(arrayOfStartDates);
    setEndDates(arrayOfEndDates);
  }

    const getAsDates = (array) => {
      let dates = [];
      for (let i = 0; i < array.length; i++) {
        let date = new Date(array[i]);
        dates.push(date);
      }
      return dates;
    };

  const gotoResidence = (id) => {
    props.history.push("/residences/" + id);
  };

  const values = () => {
    if (!residence.searchFor.city) {
      return ''
    }
    else {
      return residence.searchFor.city
    }
  }

  const list = () => {
    if (residence.searchFor.city == "") {
      arrayToMap = residenceArray;
    } else {
      arrayToMap = searchResult;
    }

    return arrayToMap.map((res, i) => {
      const cardStyle = {
        textAlign: "center",
        marginTop: "15px",
        marginBottom: "15px",
        backgroundColor: "#F5F5DC",
      };
      const imgStyle = {
        marginTop: "10px",
        border: "1px solid gray",
        cursor: "pointer",
      };

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
              src={res.images[0].img_path}
              alt="Card image cap"
              onClick={() => gotoResidence(res.id)}
            />

            <CardBody>
              <CardTitle style={{ fontWeight: "bold" }} key={res.title}>
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
    });
  };

  return (
    <div>
      {/* {gotoChoice && <Redirect to={"/residences/" + searchResult[0].sortedResidence.id} />} */}
      <Container>
        <Form className="row" onSubmit={doSearch}>
          <FormGroup className="col-5 mx-auto">
            <Input
              value={values()}
              type="text"
              id="city"
              placeholder="Skriv en stad..."
              onChange={(e) =>
                updateResidence({
                  searchFor: {
                    city: e.target.value,
                    checkIn: residence.searchFor.checkIn,
                    checkOut: residence.searchFor.checkOut,
                  },
                })
              }
            />
          </FormGroup>
          <Button onClick={doSearch} color="success" className="col-2">
            Sök
          </Button>
        </Form>
        {list()}
      </Container>
    </div>
  );
}
export default withRouter(ResidenceList);
