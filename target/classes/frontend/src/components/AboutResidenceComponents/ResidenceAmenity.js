import React, { useState, useEffect } from 'react'

const ResidenceAmenity = () => {

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

    const removeFalseAmenityAttribute = () => {
        if(items[0].Wifi === 'false') delete items[0].Wifi
        
        console.log(items)
    }

    useEffect(() => {
        removeFalseAmenityAttribute()
    })

    const list = () => {
        return items.map( (item, i) => {
            
        })
    }

    return (
        <>

        </>
    )
}

export default ResidenceAmenity