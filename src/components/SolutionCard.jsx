import { Card, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SolutionCard = ({ source, footerHeading, footerSubHeading }) => {
  return (
    <Card.Root
      bg={"#f6faff"}
      color={"black"}
      variant={"subtle"}
      rounded={"xl"}
      border={"2px solid"}
      borderColor={"gray.100"}
    >
      <Card.Body>
        <img src={source} alt="solution card" width={350} height={175} />
      </Card.Body>
      <Card.Footer alignItems={"center"} justifyContent={"center"}>
        <Stack alignItems={"center"}>
          <Text textStyle={"2xl"}>{footerHeading}</Text>
          <Flex wrap={"wrap"} maxW={"320px"}>
            <Text color={"gray.500"} textAlign={"center"}>
              {footerSubHeading}
            </Text>
          </Flex>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
};

export default SolutionCard;
