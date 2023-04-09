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
        fontFamily: "YD Gothic 100",
        color: "white",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
);
