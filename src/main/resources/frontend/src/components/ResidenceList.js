import React, { useContext, useEffect, useState } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { SearchResidence } from '../components/SearchResidence'



export default function ResidenceList() {
  const [residence, updateResidence] = useContext(ResidenceContext)
  const [searchResult, setSearchResult] = useState([])
  const residences = [];

  // Listen for updates to residence
  // (right now made by SearchResidence...)
  useEffect(() => {
    let { searchFor } = residence;
    if (!searchFor) { return; }
    // thomas' comment: I would do my actual search here
    // but for now I will just fake it to show you
    // I picked up the search criterias via context
    setSearchResult([
      { id: 1, max_guests: JSON.stringify(searchFor, '', '  ') }
    ]);
  }, [residence])

  const list = () => {
    return searchResult.map((residence, i) => {
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
      <h2 class="mt-5">ResidenceList</h2>
      {list()}
    </>
  )
}