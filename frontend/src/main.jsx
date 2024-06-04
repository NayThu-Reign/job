import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from "@mui/material"
import './fonts.css'



const fontTheme = createTheme({
  typography: {
    fontFamily: 'Kadwa, Inder, Inknut_Antiqua, Arial, sans-serif',
    // Inknut: {
    //   fontFamily: 'Inknut_Antique'
    // },
    // Kadwa: {
    //   fontFamily: 'Kadwa'
    // },
    // Inder: {
    //   fontFamily: 'Inder'
    // },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={fontTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { overflowX: "hidden" } }} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
