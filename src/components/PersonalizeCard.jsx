import { Box, Card, Theme, Stack, Text, Flex } from "@chakra-ui/react";
import DebitCardTemp from "./DebitCardTemp";

const PersonalizeCard = () => {
  return (
    <Theme appearance="light">
      <Card.Root
        bg={"#f6faff"}
        variant={"subtle"}
        border={"2px solid"}
        borderColor={"gray.100"}
        minH={"md"}
        minW={"lg"}
      >
        <Card.Body position={"relative"}>
          <Box
            position={"absolute"}
            top={"57%"}
            left={"58%"}
            transform={"translate(-50%, -50%)"}
            zIndex={0}
          >
            <DebitCardTemp />
          </Box>
          <Box
            position={"absolute"}
            top={"48%"}
            left={"49%"}
            transform={"translate(-60%, -60%)"}
            zIndex={1}
          >
            <DebitCardTemp />
          </Box>
        </Card.Body>
        <Card.Footer alignItems={"center"} justifyContent={"center"}>
          <Stack alignItems={"center"}>
            <Text color={"black"} textStyle={"2xl"}>
              Personalize Card
            </Text>
            <Flex wrap={"wrap"} maxW={"330px"}>
              <Text color={"gray.500"} textAlign={"center"}>
                Expand your buisness globally with accounts supporting multiple
                currencies
              </Text>
            </Flex>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Theme>
  );
};

export default PersonalizeCard;
