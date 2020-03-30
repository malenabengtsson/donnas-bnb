import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import SearchResidence from '../components/SearchResidence'
import ResidenceList from '../components/ResidenceList'

const Home = () =>{

    return(
        
       <div>
       <SearchResidence/>
       <ResidenceList/>

       </div>
    )
}

export default Home