import React, { useState, useEffect } from 'react'

const NumberOfGuests = (props) => {
    
    const [nrOfGuests, setNrOfGuests] = useState([])

    const getData = async () => {
        let res = await fetch('/rest/residences/props.residenceId')
        res = await res.json()
        console.log(res)
        
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>

        </>
    )
}

export default NumberOfGuests