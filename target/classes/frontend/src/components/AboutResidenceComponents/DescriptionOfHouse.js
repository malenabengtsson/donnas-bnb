import React, { useState, useEffect } from 'react'

const DescriptionOfHouse = (props) => {

    const [description, setDescription] = useState('')

    const getData = async () => {
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        //setDescription(res.description)
    }

    useEffect(() => {
      //  getData()
        setDescription("YOLO")
    })

    return (
        <>
            <p>{ description }</p>
        </>
    )
}

export default DescriptionOfHouse