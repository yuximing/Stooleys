import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import OurFood from './OurFood';

const colors = {
  food: {
    bg: '#0e0e0e',
    title: '#feffff',
    text: '#e5e5e5',
    button: '#cd553f',
  },
};
const fonts = {
  title: 'Fraunces',
  body: 'Lexend',
};
const theme = extendTheme({ colors, fonts });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <OurFood />
    </ChakraProvider>
  );
}

export default App;
