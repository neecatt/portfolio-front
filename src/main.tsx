import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tailwindcss/tailwind.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
        width: "100vw",
        height: "100vh",
        margin: "0",
        marginLeft: "0",
        marginRight: "0",
        padding: "0",
        fontFamily: "YD Gothic 200",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
);
