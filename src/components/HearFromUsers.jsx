import { Card, Container, Flex, Stack, Text, Theme } from "@chakra-ui/react";
import { Star } from "lucide-react";

const HearFromUsers = () => {
  const numOfUsers = [1, 2, 3];
  const numOfRows = [1, 2];

  return (
    <Theme appearance="light">
      <Container maxW={"full"} bg={"#fff"} pt={28}>
        <Stack minH={"70vh"} alignItems={"center"} gap={10}>
          <Stack alignItems={"center"} gap={4}>
            <Text
              fontWeight={"semibold"}
              alignItems={"center"}
              textStyle={"4xl"}
              color={"black"}
            >
              Hear From Our Users
            </Text>
            <Text>
              Discover How Dashvibe is Revolutionizing Financial Management
            </Text>
          </Stack>

          <Stack>
            {numOfRows.map((row) => (
              <Flex gap={2}>
                {numOfUsers.map((item) => (
                  <Card.Root minW={"md"} maxH={"xs"} rounded={"3xl"}>
                    <Card.Body>
                      <Stack gap={3}>
                        <Flex>
                          <img
                            src="/circle-headshot-girl.png"
                            alt="dashboard headshot"
                            width={64}
                            height={16}
                          />
                          <Stack gap={1} px={2} py={2}>
                            <Text textStyle={"md"} fontWeight={"semibold"}>
                              Courtney Henry
                            </Text>
                            <Text textStyle={"sm"} color={"gray.800"}>
                              President of Sales
                            </Text>
                          </Stack>
                        </Flex>
                        <Flex alignItems={"center"}>
                          <Star color="gold" fill="gold" />
                          <Star color="gold" fill="gold" />
                          <Star color="gold" fill="gold" />
                          <Star color="gold" fill="gold" />
                          <Star color="gold" fill="gold" />
                        </Flex>
                        <Flex maxW={"400px"}>
                          <Text>
                            Dashvibe simplified our financial workflow
                            completely. The instant insights and user-friendly
                            dashboard have saved us so much time!
                          </Text>
                        </Flex>
                      </Stack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Theme>
  );
};

export default HearFromUsers;
