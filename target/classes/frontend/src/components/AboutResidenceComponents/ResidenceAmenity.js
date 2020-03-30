import React, { useState, useEffect, useContext } from 'react'
import { ResidenceContext } from '../../contexts/ResidenceContextProvider'
const items = [
    {
        Wifi: 'true',
        TV: 'true',
        Shower: 'false',
        Bathtub: 'true',
        Balcony: 'false',
        Washing_mashine: 'true',
        Kitchen: 'true',
        Pool: 'false',
        Free_parking: 'true',
        Air_conditioner: 'true'
    }
]



const ResidenceAmenity = (props) => {
    const { residences } = useContext(ResidenceContext)
    
    const [Amenitys, setAmenitys] = useState([])

    const test = async () => {
        let res = await fetch('/rest/residences/' + props.residenceId)
        res = await res.json()
        let amenityId = res.amenity_profile_id
        res = await fetch('/rest/amenityProfiles/' + amenityId)
        res = await res.json()
        let data = []
        if(res.Wifi === 'true') data.push('Wifi')
        if(res.TV === 'true') data.push('TV')
        if(res.Shower === 'true') data.push('Shower')
        if(res.Bathtub === 'true') data.push('Bathtub')
        if(res.Balcony === 'true') data.push('Balcony')
        if(res.Washing_mashine === 'true') data.push('Washing Machine')
        if(res.Kitchen === 'true') data.push('Kitchen')
        if(res.Pool === 'true') data.push('Pool')
        if(res.Free_parking === 'true') data.push('Free parking')
        if(res.Air_conditioner === 'true') data.push('Air conditioner')
        
        setAmenitys(data)
    }

    useEffect(() => {
        test()
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