import React, { useContext } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'


export default function ResidenceList() {
  const {residences} = useContext(ResidenceContext)

    const list = () => {
        return residences.map((residence, i) => {
            return (
                <div>
                <h1>Max Guests: </h1>
            <p key={residence.max_guests + i}>{residence.max_guests}</p>
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