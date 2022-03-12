import Landing from "./home/Landing";
import Navbar from "./home/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import AboutUs from "./home/About";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/700.css";
import "@fontsource/fraunces/700.css";
import OurFood from "./home/OurFood";

const theme = extendTheme({
  colors: {
    home: {
      heading: "#FFF9F9",
      body: "#EEE2E2",
      accent: "#CD553F",
      background: "#0E0E0E",
    },
    food: {
      bg: "#0e0e0e",
      title: "#feffff",
      text: "#e5e5e5",
      button: "#cd553f",
    },
  },
  fonts: {
    heading: "Lexend",
    body: "Lexend",
    accent: "Fraunces",
  },
});

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Landing />
        <AboutUs />
        <OurFood />
      </ChakraProvider>
    </div>
  );
}

export default App;
