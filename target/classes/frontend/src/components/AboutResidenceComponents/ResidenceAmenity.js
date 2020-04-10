import React, { useState, useEffect, useContext } from 'react'

const ResidenceAmenity = (props) => {
    
    const [Amenitys, setAmenitys] = useState([])

    const checkAmenities = async () => {
        let data = []
        if(props.ResidenceAmenity.wifi === true) data.push('Wifi')
        if(props.ResidenceAmenity.tv === true) data.push('TV')
        if(props.ResidenceAmenity.shower === true) data.push('Dusch')
        if(props.ResidenceAmenity.bathtub === true) data.push('Badkar')
        if(props.ResidenceAmenity.balcony === true) data.push('Balkong')
        if(props.ResidenceAmenity.washing_mashine === true) data.push('Tvättmaskin')
        if(props.ResidenceAmenity.kitchen === true) data.push('Kök')
        if(props.ResidenceAmenity.pool === true) data.push('Simbassäng')
        if(props.ResidenceAmenity.free_parking === true) data.push('Gratis parkering')
        if(props.ResidenceAmenity.air_conditioner === true) data.push('Luftkonditionering')
        setAmenitys(data)
    }

    useEffect(() => {
        checkAmenities()
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