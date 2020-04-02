import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import SearchResidence from '../components/SearchResidence'
import HomeCarousel from '../components/HomeComponents/HomeCarousel'


const Home = () => {

  return (
    <div>
      <SearchResidence />
      <HomeCarousel />
    
    </div>
  )
}

export default Home