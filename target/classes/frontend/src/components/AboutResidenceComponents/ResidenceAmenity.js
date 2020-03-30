import React, { useState, useEffect } from 'react'

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

    const [Amenitys, setAmenitys] = useState([])

    const test = () => {
        let data = []
        if(items[0].Wifi === 'true') data.push('Wifi')
        if(items[0].TV === 'true') data.push('TV')
        if(items[0].Shower === 'true') data.push('Shower')
        if(items[0].Bathtub === 'true') data.push('Bathtub')
        if(items[0].Balcony === 'true') data.push('Balcony')
        if(items[0].Washing_mashine === 'true') data.push('Washing Machine')
        if(items[0].Kitchen === 'true') data.push('Kitchen')
        if(items[0].Pool === 'true') data.push('Pool')
        if(items[0].Free_parking === 'true') data.push('Free parking')
        if(items[0].Air_conditioner === 'true') data.push('Air conditioner')
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