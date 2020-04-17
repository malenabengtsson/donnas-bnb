import React from 'react'
import { Row, Col } from 'reactstrap'

const Footer = () => {

    var style = {
        textAlign: "center",
        padding: "0px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "53px",
        width: "100%",
        
    }
    
    // var phantom = {
    //   display: 'block',
    //   padding: '20px',
    //   height: '60px',
    //   width: '100%',
    // }

    return (
        <footer className="container-fluid mt-4" style={style}>
            <Row>
                <Col cs="12" className="bg-success text-light p-3 text-center">
                    Donna's Bnb
                </Col>
            </Row>
        </footer>
    )
}


export default Footer