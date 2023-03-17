import React from 'react'
import MainRouter from './Router/MainRouter'
// Contexts
import GlobalProvider from './Contexts/GlobalContext'
import ThemeProvider from './Contexts/ThemeContext'

export default function App() {
  return <GlobalProvider>
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  </GlobalProvider>
}