import React, { createContext, useState, useEffect } from 'react'

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props){
    const [residences, setResidences] = useState([])

    const appendResidence = (residence) => {
      
        setResidences([...residences, residence])
      }
    
      const removeResidence = id => {
  
        setResidences(residences.filter(r => r.id !== id))
      
    
        fetch('/rest/residences/' + id, {
          method: 'DELETE'
        })

    }
    const fetchResidences = async () => {
        let res = await fetch('/rest/residences')
        res = await res.json()
        // console.log('Residence: ', res)
        setResidences(res)
      }
    
      useEffect(() => {
        fetchResidences()
      }, [])
      
      const values = {
        residences, 
        setResidences,
        appendResidence,
        removeResidence
      }

    return(
        <ResidenceContext.Provider value={{values}}>
            {props.children}
        </ResidenceContext.Provider>
    )


}