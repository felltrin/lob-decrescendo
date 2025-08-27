import {
  Card,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  Theme,
} from "@chakra-ui/react";
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
            <Flex gap={2}>
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
                        <Text textStyle={"sm"} color={"gray.500"}>
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
                      <Text color={"gray.500"}>
                        Dashvibe simplified our financial workflow completely.
                        The instant insights and user-friendly dashboard have
                        saved us so much time!
                      </Text>
                    </Flex>
                  </Stack>
                </Card.Body>
              </Card.Root>
              <Card.Root minW={"md"} maxH={"xs"} rounded={"3xl"}>
                <Card.Body>
                  <Stack gap={3}>
                    <Flex>
                      <Image
                        src="/circle-hs-one.jpg"
                        alt="dash hs two"
                        boxSize={"50px"}
                        borderRadius={"full"}
                        fit={"cover"}
                      />
                      <Stack gap={1} px={2} py={2}>
                        <Text textStyle={"md"} fontWeight={"semibold"}>
                          Thresea Webb
                        </Text>
                        <Text textStyle={"sm"} color={"gray.500"}>
                          Medical Assistant
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
                      <Text color={"gray.500"}>
                        Dashvibe's intuitive interface and powerful feature have
                        transformed our project management. It's a true game...
                      </Text>
                    </Flex>
                  </Stack>
                </Card.Body>
              </Card.Root>
              <Card.Root minW={"md"} maxH={"xs"} rounded={"3xl"}>
                <Card.Body>
                  <Stack gap={3}>
                    <Flex>
                      <Image
                        src="/stock-hs-two.jpg"
                        alt="dash hs three"
                        boxSize={"50px"}
                        borderRadius={"full"}
                        fit={"cover"}
                      />
                      <Stack gap={1} px={2} py={2}>
                        <Text textStyle={"md"} fontWeight={"semibold"}>
                          Darlene Robertson
                        </Text>
                        <Text textStyle={"sm"} color={"gray.500"}>
                          Dog Trainer
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
                      <Text color={"gray.500"}>
                        We trust Dashvibe for its advanced analytics and smooth
                        teamwork features. It's greatly enhanced our team's
                        efficency and output.
                      </Text>
                    </Flex>
                  </Stack>
                </Card.Body>
              </Card.Root>
            </Flex>

            <Flex gap={2}>
              <Card.Root minW={"md"} maxH={"xs"} rounded={"3xl"}>
                <Card.Body>
                  <Stack gap={3}>
                    <Flex>
                      <Image
                        src="/stock-hs-four.jpg"
                        alt="dash hs four"
                        boxSize={"50px"}
                        borderRadius={"full"}
                        fit={"cover"}
                      />
                      <Stack gap={1} px={2} py={2}>
                        <Text textStyle={"md"} fontWeight={"semibold"}>
                          Ronald Richards
                        </Text>
                        <Text textStyle={"sm"} color={"gray.500"}>
                          Web Designer
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
                      <Text color={"gray.500"}>
                        Dashvibe's smart automation has streamlined our
                        operations drastically. Since adopting it, our
                        productivity has skyrocketed!
                      </Text>
                    </Flex>
                  </Stack>
                </Card.Body>
              </Card.Root>
              <Card.Root minW={"md"} maxH={"xs"} rounded={"3xl"}>
                <Card.Body>
                  <Stack gap={3}>
                    <Flex>
                      <Image
                        src="/stock-hs-five.jpg"
                        alt="dash hs five"
                        boxSize={"50px"}
                        borderRadius={"full"}
                        fit={"cover"}
                      />
                      <Stack gap={1} px={2} py={2}>
                        <Text textStyle={"md"} fontWeight={"semibold"}>
                          Darrell Steward
                        </Text>
                        <Text textStyle={"sm"} color={"gray.500"}>
                          Nursing Assistant
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
                      <Text color={"gray.500"}>
                        Dashvibe's flexible customization lets us adapt the
                        platform perfectly to our needs. It's a personalized
                        solution for our marketing efforts
                      </Text>
                    </Flex>
                  </Stack>
                </Card.Body>
              </Card.Root>
              <Card.Root minW={"md"} maxH={"xs"} rounded={"3xl"}>
                <Card.Body>
                  <Stack gap={3}>
                    <Flex>
                      <Image
                        src="/stock-hs-three.jpg"
                        alt="dash hs three"
                        boxSize={"50px"}
                        borderRadius={"full"}
                        fit={"cover"}
                      />
                      <Stack gap={1} px={2} py={2}>
                        <Text textStyle={"md"} fontWeight={"semibold"}>
                          Cameron Williamson
                        </Text>
                        <Text textStyle={"sm"} color={"gray.500"}>
                          Marketing Coordinator
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
                      <Text color={"gray.500"}>
                        We trust Dashvibe for its advanced analytics and smooth
                        teamwork features. It's greatly enhanced our team's
                        efficency and output.
                      </Text>
                    </Flex>
                  </Stack>
                </Card.Body>
              </Card.Root>
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Theme>
  );
};

export default HearFromUsers;
