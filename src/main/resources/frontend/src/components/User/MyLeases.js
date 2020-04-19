import React, { useState, useEffect, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Row, CardBody, CardText, Button, Spinner } from 'reactstrap'
import { ResidenceContext } from "../../contexts/ResidenceContextProvider"
import { UserContext } from "../../contexts/UserContextProvider"

const MyLeases = (props) => {
    const [ownedResidences, setOwnedResidences] = useState([])
    const { residences, setResidences } = useContext(ResidenceContext)
    const { isLoggedIn, user } = useContext(UserContext)

    const cardStyle = {
        textAlign: "center",
        margin: "15px",
        backgroundColor: "#F5F5DC"
    }
    const rowStyle = {
        textAlign: "center",
        margin: "15px",
    }

    const divStyle = {
        margin: "25px"
    }
        
        const fetchResidences = async () => {
            let res = await fetch("/rest/availablePeriods");
            res = await res.json();
            setOwnedResidences(res);

    };

        
        useEffect(() => {
           fetchResidences()
        }, [residences])


    const toLeasesPage = (id, availablePeriodId) => {
        props.history.push('/my-page/rentals/' + availablePeriodId + "/" + id)

    }

    const getDate = (residence) => {
        let startDate = Date.parse(residence.start_date)
        let date = new Date(startDate)
        return date


    }

    return (
      <div style={divStyle}>
        <h3 style={{ margin: "15px" }}>
          Mina uthyrningar
        </h3>
        {ownedResidences ? (
          <div>
            {ownedResidences.map((residence, i) => (
              <div>
                {user.id == residence.residence_id.user_id ? (
                  <Card key={i} style={cardStyle}>
                    <Row style={rowStyle}>
                      <img
                        width="80px"
                        height="80px"
                        style={{ margin: "20px" }}
                        src={
                          "https://icons.iconarchive.com/icons/artdesigner/urban-stories/256/House-icon.png"
                        }
                        alt="A house image"
                      />
                      <CardBody>
                        <CardText>
                          Address: {residence.residence_id.address_id.street}
                        </CardText>
                        <CardText>
                          Datum: {residence.start_date}{" "}
                          - {residence.end_date}
                        </CardText>
                        <Button
                          className="btn btn-success"
                          onClick={() => toLeasesPage(residence.residence_id.id, residence.id)}
                        >
                          Mer info
                        </Button>
                      </CardBody>
                    </Row>
                  </Card>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
}

export default withRouter(MyLeases)
