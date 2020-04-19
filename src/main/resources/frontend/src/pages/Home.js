import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import SearchResidence from '../components/SearchResidence'
import HomeCarousel from '../components/HomeComponents/HomeCarousel'
import BookAsGuest from './BookAsGuest'





const Home = () => {

  return (
    <div>
      <SearchResidence /> 
      <HomeCarousel residenceId={1}/>
    </div>
  )
}

export default Home