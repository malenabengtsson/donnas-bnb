import React, { useState, useEffect, useContext } from 'react'

const ResidenceAmenity = (props) => {
    
    const [Amenitys, setAmenitys] = useState([])

    const getDataFromDatabase = async () => {
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        console.log(res)
        let data = []
        if(res.amenity_profile_id.wifi === true) data.push('Wifi')
        if(res.amenity_profile_id.tv === true) data.push('TV')
        if(res.amenity_profile_id.shower === true) data.push('Dusch')
        if(res.amenity_profile_id.bathtub === true) data.push('Badkar')
        if(res.amenity_profile_id.balcony === true) data.push('Balkong')
        if(res.amenity_profile_id.washing_mashine === true) data.push('Tvättmaskin')
        if(res.amenity_profile_id.kitchen === true) data.push('Kök')
        if(res.amenity_profile_id.pool === true) data.push('Simbassäng')
        if(res.amenity_profile_id.free_parking === true) data.push('Gratis parkering')
        if(res.amenity_profile_id.air_conditioner === true) data.push('Luftkonditionering')
        setAmenitys(data)
    }

    useEffect(() => {
        getDataFromDatabase()
    }, [])

    const list = Amenitys.map((amenity, i) => {
        return (
            <div key={i + 'Test'} >
                {amenity}
            </div>
        )
    })

    return (
        <>
            <h5>Bekvämligheter:</h5>
            < >
                {list}
                <br/>
            </>
        </>
    )
}

export default ResidenceAmenity