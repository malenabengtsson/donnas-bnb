import React, { useState, useEffect } from 'react'

const NumberOfBeds = (props) => {
    
    const [nrOfBeds, setNrOfBeds] = useState([''])

    const getData = async () => {
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        //setNrOfBeds(res.nrOfBeds)   
    }

    useEffect(() => {
       // getData()
        setNrOfBeds(2)
    }, [])

    return (
        <>
            <p>{nrOfBeds} Sängar</p>
        </>
    )
}

export default NumberOfBeds
