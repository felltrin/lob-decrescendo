import { Card, Flex, Image, Theme, Text, Stack } from "@chakra-ui/react";
import { Circle } from "lucide-react";

const DebitCardTemp = () => {
  const nums = [1, 2, 3, 4];
  const numOfSeries = [1, 2, 3];

  return (
    <Theme appearance="light">
      <Card.Root
        position={"relative"}
        overflow={"hidden"}
        bg={"#328299"}
        minW={"xs"}
      >
        <Circle
          style={{
            position: "absolute",
            transform: "translate(55%, 10%)",
          }}
          size={384}
          color="#B6EB8E"
          fill="#B6EB9E"
        />
        <Stack position={"relative"}>
          <Card.Header>
            <Flex alignItems={"baseline"} justifyContent={"space-between"}>
              <Stack gap={-1}>
                <Theme bg={"#328299"}>
                  <Text>Current balance</Text>
                  <Text textStyle={"4xl"} fontWeight={"semibold"}>
                    70,700.00
                  </Text>
                </Theme>
              </Stack>
              <Image
                src="/Visa_Logo.png"
                alt="visa logo"
                htmlHeight={"25px"}
                htmlWidth={"75px"}
              />
            </Flex>
          </Card.Header>
          <Card.Body></Card.Body>
          <Card.Footer>
            <Theme bg={"transparent"}>
              <Stack minW={"xs"}>
                <Text>Abdur Rahman</Text>
                <Flex
                  gap={18}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Flex gap={4} alignItems={"center"}>
                    {numOfSeries.map(() => (
                      <Flex gap={0.5}>
                        {nums.map(() => (
                          <Circle size={3} color={"white"} fill="white" />
                        ))}
                      </Flex>
                    ))}
                    <Text>87276</Text>
                  </Flex>
                  <Flex>
                    <Text>12/19</Text>
                  </Flex>
                </Flex>
              </Stack>
            </Theme>
          </Card.Footer>
        </Stack>
      </Card.Root>
    </Theme>
  );
};

export default DebitCardTemp;
