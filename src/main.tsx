import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'tailwindcss/tailwind.css'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider>
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
