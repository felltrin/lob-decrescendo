import {
  Card,
  Flex,
  Icon,
  IconButton,
  Stack,
  Text,
  Theme,
} from "@chakra-ui/react";
import { DollarSign } from "lucide-react";

const TotalProfitCard = () => {
  return (
    <Theme appearance="light">
      <Card.Root border={"1px solid"} borderColor={"gray.200"} minW={"250px"}>
        <Card.Body>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Stack>
              <Text textStyle={"sm"} color={"gray.400"}>
                Total Profit
              </Text>
              <Text textStyle={"3xl"} fontWeight={"semibold"}>
                $14.500
              </Text>
            </Stack>
            <IconButton
              bg={"#ecf3e79c"}
              size={"2xl"}
              rounded={"3xl"}
              pointerEvents={"none"}
            >
              <DollarSign color={"#B8EB9E"} />
            </IconButton>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Theme>
  );
};

export default TotalProfitCard;
