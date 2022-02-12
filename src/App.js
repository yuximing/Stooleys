import Landing from "./home/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/700.css";
import "@fontsource/fraunces/700.css";

const theme = extendTheme({
  colors: {
    home: {
      heading: "#FFF9F9",
      body: "#EEE2E2",
      accent: "#CD553F",
      background: "#0E0E0E",
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
    <ChakraProvider theme={theme}>
      <Landing />
    </ChakraProvider>
  );
}

export default App;
