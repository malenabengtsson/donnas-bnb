import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import SearchResidence from '../components/SearchResidence'
import BookAsGuest from './BookAsGuest'


const Home = () => {

  return (
    <div>
      <SearchResidence />
    </div>
  )
}

export default Home