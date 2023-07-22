import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack>
      <Box w='500px' h='500px' bg='white' p={2}>
        <Image src={imageSrc} />
        <Heading as='h3' size='lg' color='black' mt={2}>
          {title}
        </Heading>
        <Text fontSize='md' color={"gray.700"} mt={2}>
          {description}
        </Text>
        <HStack mt={5}>
          <Text color={"black"}>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} color='black' size='1x' />
        </HStack>
      </Box>
    </VStack>
  );
};
export default Card;
