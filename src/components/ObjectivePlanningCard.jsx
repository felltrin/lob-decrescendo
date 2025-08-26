import { Box, Card, Flex, Stack, Text, Theme } from "@chakra-ui/react";
import TotalProfitCard from "./TotalProfitCard";
import TotalSalesCard from "./TotalSalesCard";

const ObjectivePlanningCard = () => {
  return (
    <Theme appearance="light">
      <Card.Root
        minW={"sm"}
        minH={"md"}
        bg={"#f6faff"}
        border={"2px solid"}
        borderColor={"gray.100"}
      >
        <Card.Body position={"relative"}>
          <Box
            position={"absolute"}
            top={"37%"}
            left={"38%"}
            transform={"translate(-50%, -50%)"}
            zIndex={1}
          >
            <TotalProfitCard />
          </Box>
          <Box
            position={"absolute"}
            top={"73%"}
            left={"69%"}
            transform={"translate(-60%, -60%)"}
            zIndex={0}
          >
            <TotalSalesCard />
          </Box>
        </Card.Body>
        <Card.Footer>
          <Stack alignItems={"center"}>
            <Text color={"black"} textStyle={"2xl"}>
              Objective Planning & Tracking
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

export default ObjectivePlanningCard;
