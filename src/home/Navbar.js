import { Box, HStack, Text, Button, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import "https://www.fbgcdn.com/embedder/js/ewm2.js";
import "./orderbutton.css";

export default function Navbar() {
  return (
    <Box w="70%" pl="5%" pos="absolute" top="2%" zIndex="99">
      <HStack spacing="1.7rem">
        <Image src={Logo} boxSize="8%" mr="50px"></Image>
        <Button
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin "
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
        >
          About
        </Button>
        <Button
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
        >
          Menu
        </Button>
        <Button
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
        >
          Drinks
        </Button>
        <Button
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
        >
          Catering
        </Button>
        <Button
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
        >
          Contact
        </Button>

        <Box
          as="span"
          class="order-btn"
          data-glf-cuid="52f8881e-999c-4dc6-8881-126c9e2980a6"
          data-glf-ruid="e6894a38-768c-425d-8f1a-e7e95f3e3bc7"
          color="#0E0E0E"
          bg="#FFEEEE"
          fontWeight="thin"
          fontSize="0.7rem"
          p="0.5rem"
          borderRadius="4px"
          sx={{ cursor: "pointer" }}
          _hover={{
            background: "#0E0E0E",
            color: "#FFEEEE",
            border: "1px solid #FFEEEE",
            transition: "all 0.2s linear",
          }}
        >
          {" "}
          Order Delivery
        </Box>
      </HStack>
    </Box>
  );
}
