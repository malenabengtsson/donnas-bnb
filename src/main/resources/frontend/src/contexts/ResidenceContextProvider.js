import React, { createContext, useState, useEffect } from 'react'

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props){
    const [residences, setResidences] = useState( [
        {
            id: '1',
            max_guests: '4',
            address_id: '1',
            beds: '3',
            image_id: '5',
            user_id: '7'
        }
    ])

    return(
        <ResidenceContext.Provider value={{residences}}>
            {props.children}
        </ResidenceContext.Provider>
    )


}