import React, { createContext } from 'react'
import { defaultTheme } from '../Content/themes'

const ThemeContext = createContext();

function ThemeProvider(props) {
    return (
        <ThemeContext.Provider value={{
            theme: defaultTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider
export { ThemeContext }