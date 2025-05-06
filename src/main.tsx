import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tailwindcss/tailwind.css";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ResumeProvider } from "./context/ResumeContext";
import { initializeAnalytics } from "./services/analytics.service";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
        width: "100%",
        height: "100%",
        margin: "0",
        marginLeft: "0",
        marginRight: "0",
        padding: "0",
        fontFamily: "YD Gothic 200",
        overflowX: "hidden",
      },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

// Initialize Google Analytics
initializeAnalytics();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraBaseProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <ResumeProvider>
          <App />
        </ResumeProvider>
      </AuthProvider>
    </BrowserRouter>
  </ChakraBaseProvider>
);
