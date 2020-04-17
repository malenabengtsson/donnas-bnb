import React, { useContext, useState, useEffect } from 'react'
import { ResidenceContext } from '../../contexts/ResidenceContextProvider'

const AdvertiserInformation = (props) => {
    const { residences } = useContext(ResidenceContext)

    const [information, setInformation] = useState()


    const getData = async () => {
        let res = await fetch('rest/residences/' + props.residenceId)
        res = await res.json()
        // setInformation(res.information)    
    }

    const getUser = async () => {
        let res = await fetch('/rest/users/')
        res = await res.json()
        console.log(res)
    }

    

    useEffect(() => {
        getData()
        getUser()
    }, []) 

    return (
        <>
        <h5>Uthyrare</h5>
        <p>{ information }</p>

        </>
    )

    
}

export default AdvertiserInformation