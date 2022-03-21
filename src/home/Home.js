import OurFood from "./OurFood";
import AboutUs from "./About";
import Landing from "./Landing";
import { ChakraProvider, Box } from "@chakra-ui/react";

import React from "react";

const Home = () => {
  return (
    <Box>
      <Landing />
      <AboutUs />
      <OurFood />
    </Box>
  );
};

export default Home;
