import OurFood from "./OurFood";
import AboutUs from "./About";
import Landing from "./Landing";
import { ChakraProvider } from "@chakra-ui/react";

import React from "react";

const Home = () => {
  return (
    <>
      <Landing />
      <AboutUs />
      <OurFood />
    </>
  );
};

export default Home;
