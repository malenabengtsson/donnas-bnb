import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import SearchResidence from '../components/SearchResidence'
import ResidenceList from '../components/ResidenceList'

// importing the ResidenceContext
import { ResidenceContext } from '../contexts/ResidenceContextProvider'

const Home = () => {

  // creating a useState variable for the context
  // (using an empty object - if you wanted some values
  // set from start you could set them in that object)
  const [val, setter] = useState({});
  // the setter from useState replaces everything
  // but we want a setter that updates to object instead
  const updater = x => setter({ ...val, ...x })

  return (
    <div>
      <ResidenceContext.Provider value={[val, updater]}>
        <SearchResidence />
        <ResidenceList />
      </ResidenceContext.Provider>
    </div>
  )
}

export default Home