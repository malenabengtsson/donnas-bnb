import React, { useState, useEffect } from 'react'

const NumberOfGuests = (props) => {
    const [nrOfGuests, setNrOfGuests] = useState([])

    const getData = async () => {
        
       // var id = parseInt(props.residenceId)
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        setNrOfGuests(res.max_guests)
    }

    useEffect(() => {
        getData()
       // setNrOfGuests(4)
    }, [])

    return (
        <>
            <p>{nrOfGuests} Gäster</p>
        </>
    )
}

export default NumberOfGuests