import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import SearchResidence from '../components/SearchResidence'
import CustomButton from '../components/CustomButton'

const Home = () => {

  return (
    <div>
      <CustomButton label="click me please"/>
      <SearchResidence />
    </div>
  )
}

export default Home