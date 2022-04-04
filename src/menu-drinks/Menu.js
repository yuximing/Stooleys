import React from "react";
import {
  Flex,
  Text,
  Box,
  Heading,
  Image,
  Button,
  Container,
} from "@chakra-ui/react";
import menu from "../assets/menu-img.png";

const Menu = () => {
  return (
    <Box h="auto" w="100vw" bg="#0E0E0E">
      <Image src={menu} alt="menu" w="60%" m="auto"></Image>
    </Box>
  );
};

export default Menu;
