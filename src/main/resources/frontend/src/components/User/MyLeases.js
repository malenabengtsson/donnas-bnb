import React, { useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Row, CardBody, CardText, Button, Spinner } from 'reactstrap'

const MyLeases = (props) => {
    const [residences, setResidences] = useState([])
    const [ownedResidences, setOwnedResidences] = useState([])
    console.log(props.User);

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

    useEffect(() => {
        getResidences()
    },[])

    useEffect(() => {
        userOwnedResidences()
    }, [props.User])

    useEffect(() => {
        console.log(residences)
    }, [residences])
    
    useEffect(() => {
    }, [ownedResidences])

    

    const getResidences = async () => {
         let res = await fetch("/rest/residences");
        res = await res.json();
        console.log(res)
         let result = [];
        res.forEach((el) => {
          result.push(el);
         });
        setResidences(result);
    }

    const userOwnedResidences = () => {
        let array = [];
        residences.forEach((residence) => {
            if (props.User.id == residence.user_id) {
                array.push(residence)
                
            }
        });
        setOwnedResidences(array)
      
    }

    const toLeasesPage = () => {
 
    }

    const list = () => {
        console.log('in list')
        console.log(ownedResidences)
        return ownedResidences.map((lease, i) => {
            return (
                <Card key={i} style={cardStyle}>
                    <Row style={rowStyle}>
                    <img width="80px" height="80px" style={{margin: '20px'}} src={'https://icons.iconarchive.com/icons/artdesigner/urban-stories/256/House-icon.png'} alt="A house image" />
                    <CardBody>
                        <CardText>Address: {lease.address_id.street}</CardText>
                        <CardText>Datum: {lease.start_date} - {lease.end_date}</CardText>
                        <Button className="btn btn-success" onClick={() => toLeasesPage()}>Mer info</Button>
                    </CardBody>
                </Row>
                </Card>
            )
        })    
    }

    return (
        <div style={divStyle}>
        <h3 className="text-white" style={{margin: '15px'}}>Mina uthyrningar</h3>
        {list()} 
        </div>
    )
}

export default withRouter(MyLeases)
