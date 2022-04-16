import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './SaintPatrickBankApp'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      primary: {
        normal: "#005758",
        dark: "#002D2F",
        light: "#3E8485",
        primary200: "#7FAAAB",
        primary100: "#E6ECEC"
      },
      secundary: {
        dark: "#C0950C",
        secondary: "#F7C548",
        light: "#FFF879",
        primary100: "rgba(247, 197, 72, 0.25)",

      },
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
