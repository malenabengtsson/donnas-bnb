import React, { useContext } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import {SearchResidence} from '../components/SearchResidence'



export default function ResidenceList() {
  const {residences} = useContext(ResidenceContext)

    const list = () => {
        return residences.map((residence, i) => {
            return (
                <div>
                <p key={residence.id + i}>Recidence id: {residence.id}</p>
            <p key={residence.max_guests + i}>Max Guests: {residence.max_guests}</p>
                </div>

            )
        })
    }
  
    return (
      <>
        {list()}
      </>
    )
  }