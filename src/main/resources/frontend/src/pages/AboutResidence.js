import React from 'react'

import Slideshow from '../components/AboutResidenceComponents/Carousel'
import NumberOfGuests from '../components/AboutResidenceComponents/NumberOfGuests'

const AboutResidence = () => {
    return (
        <>
            <Slideshow imageId={1} />
            <NumberOfGuests residenceId={1} />
        </>
    )
}

export default AboutResidence