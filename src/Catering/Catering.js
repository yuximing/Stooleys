import { Flex } from "@chakra-ui/react";
import { VStack, HStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import img from "../assets/cateringimg.png";

function Catering() {

    return (
        <Flex
            bg="#0E0E0E"
            width="100vw"
            height="150vh"
            justifyContent='space-between'
            margin="0"
            p="0"
        >
            <Image
                src={img}
            >
            </Image>

            <VStack>

                <Heading
                    color="#FEFFFF"
                    fontFamily='Fraunces'
                >
                    Catering Service
                </Heading>



                <Text
                    color="#EEE2E2"
                >

                    From business meetings to conferences to company or private parties, we’ve got you covered.
                    We provide the highest quality fresh food and service in Kingston district. <br />
                    <br />
                    Whether you have a team building exercise, a bridal shower, a formal or casual dinner or a luncheon for an excursion,
                    we will cater to your needs by preparing bespoke menus for the occasion.

                    <ul>
                        <li>Private party Dinners</li>
                        <li>Wedding Receptions</li>
                        <li>Conferences</li>
                        <li>Graduations</li>
                        <li>Birthdays</li>
                        <li>Milestone events</li>
                        <li>Special events</li>
                        <li>Tour lunches</li>
                    </ul>

                    <Heading
                        fontFamily='Fraunces'
                        fontSize='48px'
                        color='#FEFFFF'
                    >
                        Let us do the work for you
                    </Heading>
                    <br />

                    With more than fifty years of combined experience as culinary experts dishing out various cuisines, we know a thing or two about events.
                    You can rely on our expert team for the finest in catering services and vendor coordination. We offer the best in service for every customer
                    and pride ourselves on our reputation. Our commitment to quality and freshness in the food we cater or deliver sets us apart from the competition.

                    <br />
                    <br />
                    Talk to us regarding your requirements and we will be happy to work with you

                </Text>


            </VStack>






        </Flex>
    );
}

export default Catering;