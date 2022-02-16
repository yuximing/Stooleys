import { ChakraProvider } from "@chakra-ui/react";
import AboutUs from './home/About'


function App() {
  return <ChakraProvider>
    <AboutUs/>
  </ChakraProvider>;
}

export default App;
