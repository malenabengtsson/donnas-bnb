import React, { createContext, useState, useEffect } from 'react'

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState([])

  const appendResidence = (residence) => {

    setResidences([...residences, residence])
  }
   
  useEffect(() => {
    fetchResidences()
  }, [])
      

  const removeResidence = id => {
    setResidences(residences.filter(r => r.id !== id))


    fetch('/rest/residences/' + id, {
      method: 'DELETE'
    })

  }
  const fetchResidences = async () => {
    let res = await fetch('/rest/residences')
    res = await res.json()
    setResidences(res)
  }

  useEffect(() => {
    fetchResidences()
  }, [])

  const values = {
    residences,
    setResidences,
    appendResidence,
    removeResidence,
    fetchResidences
  }

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  )
}
