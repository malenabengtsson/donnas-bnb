import React, { useState, useEffect } from 'react'

const NumberOfGuests = (props) => {
    const [nrOfGuests, setNrOfGuests] = useState([])

    return (
        <>
            <p>{props.NumberOfGuests} Gäster</p>
        </>
    )
}

export default NumberOfGuests