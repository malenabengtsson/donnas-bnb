import React, { useState, useEffect } from 'react'

const DescriptionOfHouse = (props) => {

    const [description, setDescription] = useState([])

    const getData = async () => {
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        //setDescription(res.description)
    }

    useEffect(() => {
      //  getData()
        setDescription("A very big house for up to 10 people and a dog or two.")
    }, [])

    return (
        <>
            <h5>Beskrivning:</h5>
            <p>{ description }</p>
        </>
    )
}

export default DescriptionOfHouse