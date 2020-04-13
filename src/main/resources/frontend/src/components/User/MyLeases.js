import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Row, CardBody, CardText, Button } from 'reactstrap'

const MyLeases = (props) => {

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

    const toLeasesPage = () => {

    }

    const list = () => {
        // return props.usrLeases('Hello').map((lease, i) => {
        //     return (
        //         <Card key={i} style={cardStyle}>
        //         <Row style={rowStyle}>
        //             <img width="80px" height="80px" style={{margin: '20px'}} src={'https://icons.iconarchive.com/icons/artdesigner/urban-stories/256/House-icon.png'} alt="A house image" />
        //             <CardBody>
        //                 <CardText>Address: {lease.residence_id.address_id.street}</CardText>
        //                 <CardText>Datum: {lease.start_date} - {lease.end_date}</CardText>
        //                 <Button className="btn btn-success" onClick={() => toLeasesPage()}>Mer info</Button>
        //             </CardBody>
        //         </Row>
        //         </Card>
        //     )
        // })    
    }

    return (
        <div style={divStyle}>
        <h3 className="text-white" style={{margin: '15px'}}>Mina uthyrningar</h3>
        {list()} 
        </div>
    )
}

export default withRouter(MyLeases)
