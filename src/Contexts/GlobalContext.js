import React, { createContext } from 'react'

const GlobalContext = createContext();

function GlobalProvider(props) {
    return (
        <GlobalContext.Provider value={{
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider
export { GlobalContext }