import React, { useState, useEffect, useContext } from 'react'

const ResidenceAmenity = (props) => {
    
    const [Amenitys, setAmenitys] = useState([])

    const getDataFromDatabase = async () => {
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        let amenityId = res.amenity_profile_id
        res = await fetch('/rest/amenityProfiles/' + amenityId)
        res = await res.json()
        let data = []
        if(res.wifi === true) data.push('Wifi')
        if(res.tv === true) data.push('TV')
        if(res.shower === true) data.push('Dusch')
        if(res.bathtub === true) data.push('Badkar')
        if(res.balcony === true) data.push('Balkong')
        if(res.washing_mashine === true) data.push('Tvättmaskin')
        if(res.kitchen === true) data.push('Kök')
        if(res.pool === true) data.push('Simbassäng')
        if(res.free_parking === true) data.push('Gratis parkering')
        if(res.air_conditioner === true) data.push('Luftkonditionering')
        setAmenitys(data)
    }

    useEffect(() => {
        getDataFromDatabase()
    }, [])

    const list = Amenitys.map((amenity, i) => {
        return (
            <li key={i + 'Test'}>
                {amenity}
            </li>
        )
    })

    return (
        <>
            <h5>Bekvämligheter:</h5>
            <ul>
                {list}
            </ul>
        </>
    )
}

export default ResidenceAmenity