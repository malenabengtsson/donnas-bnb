import React, { useContext, useState, useEffect } from '.react'
import { ResidenceContext } from '../../contexts/ResidenceContextProvider'

const AdvertiserInformation = (props) => {
    const { residences } = useContext(ResidenceContext)

    const [information, setInformation] = useState()

    const getData = async () => {
        let res = await fetch('rest/residences/' + props.residenceId)
        res = await res.json()
        setInformation(res.information)    
    }

    useEffect(() => {
        getData()
    }, []) 

    return (
        <>
        <h3>Uthyrare</h3>
        <p>{ information }</p>

        </>
    )

    export default AdvertiserInformation
}