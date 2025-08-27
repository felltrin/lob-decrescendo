import { Button, Card, Flex, Stack, Text } from "@chakra-ui/react";

const SubscriptionCard = () => {
  return (
    <Stack gap={0}>
      <Card.Root roundedTop={"md"} roundedBottom={"none"} minH={"sm"}>
        <Card.Header>
          <Text>Starter Plan</Text>
        </Card.Header>
        <Card.Body>
          <Flex>
            <Text>$19</Text>
            <Text> per month</Text>
          </Flex>
          <Text>For teams up to 20 members</Text>
        </Card.Body>
        <Card.Footer>
          <Stack>
            <Button>Begin now</Button>
            <Button>Talk to sales</Button>
          </Stack>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        roundedTop={"none"}
        roundedBottom={"md"}
        variant={"elevated"}
        minH={"xs"}
      >
        <Card.Header>
          <Text>CAPABILITIES</Text>
          <Text>Everything in Starter plus</Text>
        </Card.Header>
        <Card.Body>
          <Flex>
            <Text>$19</Text>
            <Text> per month</Text>
          </Flex>
          <Text>For teams up to 20 members</Text>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};

export default SubscriptionCard;
