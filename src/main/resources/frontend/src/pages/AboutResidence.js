import React from 'react'

import Slideshow from '../components/AboutResidenceComponents/Carousel'
import NumberOfGuests from '../components/AboutResidenceComponents/NumberOfGuests'
import DescriptionOfHouse from '../components/AboutResidenceComponents/DescriptionOfHouse'
import ResidenceAmenity from '../components/AboutResidenceComponents/ResidenceAmenity'
import CalendarForBooking from '../components/AboutResidenceComponents/CalendarForBooking'
import ResidencePrice from '../components/AboutResidenceComponents/ResidencePrice'

const AboutResidence = () => {
    return (
        <>
            <Slideshow imageId={1} />
            <NumberOfGuests residenceId={1} />
            <DescriptionOfHouse residenceId={1} />
            <ResidenceAmenity residenceId={1} />
            <CalendarForBooking />
            <ResidencePrice startDate={'01/03'} endDate={'03/06'} pricePerNight={799}/>
        </>
    )
}

export default AboutResidence