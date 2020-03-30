import React, { useContext } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default function ResidenceList() {
  const {residences} = useContext(ResidenceContext)

    const list = () => {
        return residences.map((residence, i) => {

          return(
          <div>
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
          )
            // return (
            //     <div>
            //     <p key={residence.id + i}>Recidence id: {residence.id}</p>
            // <p key={residence.max_guests + i}>Max Guests: {residence.max_guests}</p>
            //     </div>

            // )
     //   })
    }
  
    return (
      <>
        {list()}
      </>
    )
  }