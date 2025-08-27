import { Box, Button, Card, Flex, Stack, Text } from "@chakra-ui/react";
import { CircleCheck } from "lucide-react";

const SubscriptionCard = ({
  subscriptionTier,
  subscriptionPrice,
  subscriptionDesc,
  isProPlan,
  isEnterprise,
  checklistItems,
}) => {
  const items = checklistItems;

  return (
    <Stack gap={0}>
      <Card.Root
        roundedTop={"2xl"}
        roundedBottom={"none"}
        minH={"sm"}
        minW={"sm"}
        variant={"elevated"}
      >
        <Card.Header>
          {!isProPlan ? (
            <Text textStyle={"lg"} color={"gray.500"}>
              {subscriptionTier}
            </Text>
          ) : (
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text textStyle={"lg"} color={"gray.500"}>
                {subscriptionTier}
              </Text>
              <Box
                bg={"#b6eb8e55"}
                rounded={"xl"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text color={"#B6EB8E"} paddingX={3} textAlign={"center"}>
                  Popular
                </Text>
              </Box>
            </Flex>
          )}
        </Card.Header>
        <Card.Body>
          <Flex alignItems={"end"} gap={2} pb={4}>
            {isEnterprise ? (
              <Text textStyle={"6xl"} fontWeight={"bold"}>
                {subscriptionPrice}
              </Text>
            ) : (
              <>
                <Text textStyle={"6xl"} fontWeight={"bold"}>
                  ${subscriptionPrice}
                </Text>
                <Text pb={3} color={"gray.500"}>
                  {" "}
                  per month
                </Text>
              </>
            )}
          </Flex>
          <Text>{subscriptionDesc}</Text>
          <Stack pt={8}>
            <Button
              minH={"50px"}
              bg={"#b9eb8e"}
              color={"white"}
              _hover={{ bg: "#e04e2c" }}
              display={{ base: "none", md: "block" }}
              rounded={"lg"}
            >
              Begin now
            </Button>
            <Button
              minH={"50px"}
              border={"2px solid"}
              borderColor={"gray.200"}
              bg={"white"}
              color={"black"}
              _hover={{ bg: "#000", color: "#fff" }}
              display={{ base: "none", md: "block" }}
              rounded={"lg"}
            >
              Talk to sales
            </Button>
          </Stack>
        </Card.Body>
      </Card.Root>
      <Card.Root
        roundedTop={"none"}
        roundedBottom={"md"}
        variant={"elevated"}
        minH={"xs"}
      >
        <Card.Header minH={"8vh"}>
          <Text fontWeight={"bold"}>CAPABILITIES</Text>
          {isEnterprise ? (
            <Text>
              Everything in <b>Pro</b> plus...
            </Text>
          ) : (
            <></>
          )}
          {isProPlan ? (
            <Text>
              Everything in <b>Starter</b> plus...
            </Text>
          ) : (
            <></>
          )}
        </Card.Header>
        <Card.Body>
          <Stack>
            {items.map((item) => (
              <Flex gap={3}>
                <CircleCheck color="#B6EB9E" />
                <Text color={"gray.500"}>{item}</Text>
              </Flex>
            ))}
          </Stack>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};

export default SubscriptionCard;
