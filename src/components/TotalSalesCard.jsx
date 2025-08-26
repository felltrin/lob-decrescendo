import { Card, Flex, IconButton, Stack, Text, Theme } from "@chakra-ui/react";
import { ChartColumnBig } from "lucide-react";

const TotalSalesCard = () => {
  return (
    <Theme appearance="light">
      <Card.Root border={"1px solid"} borderColor={"gray.200"} minW={"250px"}>
        <Card.Body>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Stack>
              <Text textStyle={"sm"} color={"gray.400"}>
                Total Sales
              </Text>
              <Text textStyle={"3xl"} fontWeight={"semibold"}>
                26.800K
              </Text>
            </Stack>
            <IconButton
              bg={"#ecf3e79c"}
              size={"2xl"}
              rounded={"3xl"}
              pointerEvents={"none"}
            >
              <ChartColumnBig color={"#B8EB9E"} />
            </IconButton>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Theme>
  );
};

export default TotalSalesCard;
