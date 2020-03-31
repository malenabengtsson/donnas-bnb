import React, { createContext, useState } from 'react'

export const SelectedPeriodContext = createContext()

const SelectedPeriodContextProvider = (props) => {
    const [fromDate, setFromDate] = useState('')
    const [untilDate, setUntilDate] = useState('')

    const addFromDate = (date) => {
        setFromDate(date)
        console.log(date)
    }

    const addUntilDate = (date) => {
        setUntilDate(date)
        console.log(date)
    }

    const values = {
        fromDate,
        untilDate,
        addFromDate,
        addUntilDate
    }

    return (
        <SelectedPeriodContext.Provider value={{values}}>
            {props.children}
        </SelectedPeriodContext.Provider>
    )
}

export default SelectedPeriodContextProvider