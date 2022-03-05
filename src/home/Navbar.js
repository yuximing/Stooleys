import { Box, HStack, Text, Button, Image } from '@chakra-ui/react'
import Logo from "../assets/logo.png"

export default function Navbar() {

  return (
      <Box w="70%" pl="5%" pos="absolute" top="2%" zIndex="99">
        <HStack spacing="32px">
          <Image src={Logo} boxSize="70px" mr="50px"></Image>
          <Button variant='ghost' color="white" fontWeight="thin">
           Home
          </Button>
          <Button variant='ghost' color="white" fontWeight="thin">
            About
          </Button>
          <Button variant='ghost' color="white" fontWeight="thin">
            Menu
          </Button>
          <Button variant='ghost' color="white" fontWeight="thin">
            Drinks
          </Button>
          <Button variant='ghost' color="white" fontWeight="thin">
            Catering
          </Button>
          <Button variant='ghost' color="white" fontWeight="thin">
            Contact
          </Button>
        </HStack>
      </Box>
  );

}