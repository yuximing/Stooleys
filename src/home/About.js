import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack, Spacer } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Flex, Center, Square, Box } from '@chakra-ui/react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

function About() {

    return (
        
        <Flex>
        <Flex bg="#0E0E0E" width="100vw" height="100vh" align="center" boxSizing="border-box" border="">


            <Heading>
                <Text fontSize="72px" top="1569px" left="90px" width="294px" height="89px" color="#FEFFFF" fontFamily="Fraunces" transform="rotate(-90deg)" fontStyle="normal" fontWeight="bold">
                    About us
                </Text>
            </Heading>


            <VStack align="flex-start" color="#EEE2E2" height="299px" width="936.77px" top="1275px" left="307">
                <HStack width="144px" height="25px" top="1208px" left="307px" >
                    <a href="https://www.facebook.com/stooleysbg/" target="_blank"><input type="button" class="button" /><IconButton backgroundColor="transparent" icon={<FaFacebookF />}></IconButton></a>
                    <a href="https://twitter.com/stooleysbg" target="_blank"><input type="button" class="button" /><IconButton backgroundColor="transparent" icon={<FaTwitter />}></IconButton></a>
                    <a href="https://www.instagram.com/stooleysbargrill/?hl=en" target="_blank"><input type="button" class="button" /><IconButton backgroundColor="transparent" icon={<FaInstagram />}></IconButton></a>
                </HStack>
                <Divider orientation='horizontal' width="341px" top="1249px" left="309px" />
                <div>

                </div>
                <text>
                    STOOLEY’S Bar and Grill serves popular Canadian cuisine, handcrafted cocktails and service par
                    excellence in a relaxed restaurant atmosphere. The well-stacked bar boasts of a wide selection of
                    domestic and imported beers, wines, spirits and our exclusive house cocktails.
                </text>
                <div>

                </div>


                <text >
                    Set up over 30 years ago by a young entrepreneur with a passion for food and drinks the culinary
                    tradition continues in Kingston the “Limestone city” on Lake Ontario. Located a short walk away from the
                    Queens University Campus and close to downtown.
                </text>
                <div>

                </div>
                <text>
                    The detailed service and sizeable portions of the sumptuous spread from an elaborate menu is sure to
                    fancy your palate. So, sit back, relax, have a drink and a bite. Enjoy and don’t feel shy in making some
                    noise with your friends!
                </text>
                <div>

                </div>
                <text>
                    We welcome you to have an enchanted dining experience in our newly renovated and refurbished premises.
                </text>

            </VStack>

        </Flex>

        </Flex>

    );

}




export default About
