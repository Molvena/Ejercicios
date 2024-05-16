import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import {theme} from "./theme/base.jsx"

//Ahorta que tenemos el provider necesitamos dqrle su contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme = {theme}>
    <App />
  </ThemeProvider>
)
