import {
  Flex,
  IconButton,
  Image,
  Stack,
  Table,
  Text,
  Theme,
} from "@chakra-ui/react";
import { BarChart, LineChart, Lock, Timer, Unlink, Wrench } from "lucide-react";

const MakesUnique = () => {
  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  ];

  return (
    <Theme appearance="light">
      <Stack alignItems={"center"} minH={"125vh"}>
        <Stack alignItems={"center"} gap={20}>
          <Stack alignItems={"center"} gap={3}>
            <Text fontWeight={"semibold"} textStyle={"4xl"} color={"black"}>
              What Makes Dashvibe Different?
            </Text>
            <Text textStyle={"lg"} textAlign={"center"} color={"gray.500"}>
              Transform the Way You Manage Finances with These Key Advantages
              and Powerful Features
            </Text>
          </Stack>
          <Image
            src="make-different-screen.png"
            alt="screen for uhhh..."
            rounded={"2xl"}
            width={1400}
            height={700}
          />
        </Stack>

        <Flex maxW={"5/6"}>
          <Table.Root size="lg" showColumnBorder>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <IconButton
                    pointerEvents={"none"}
                    bg={"gray.100"}
                    color={"black"}
                  >
                    <Unlink />
                  </IconButton>
                  <Text textStyle={"xl"} fontWeight={"bold"}>
                    Effortless Connectivity
                  </Text>
                  <Text textStyle={"md"}>
                    Easily connect Dashvibe with your current ERP, CRM, or
                    accounting tools
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    pointerEvents={"none"}
                    bg={"gray.100"}
                    color={"black"}
                  >
                    <LineChart />
                  </IconButton>
                  <Text textStyle={"xl"} fontWeight={"bold"}>
                    Built to grow
                  </Text>
                  <Text textStyle={"md"}>
                    Dashvibe scales with you, from startups to large enterprises
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    pointerEvents={"none"}
                    bg={"gray.100"}
                    color={"black"}
                  >
                    <Wrench />
                  </IconButton>
                  <Text textStyle={"xl"} fontWeight={"bold"}>
                    Tailored and Adaptable Solutions
                  </Text>
                  <Text textStyle={"md"}>
                    Customize reports, alerts, and more to match your precise
                    financial needs
                  </Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <IconButton
                    pointerEvents={"none"}
                    bg={"gray.100"}
                    color={"black"}
                  >
                    <Timer />
                  </IconButton>
                  <Text textStyle={"xl"} fontWeight={"bold"}>
                    Instant analytics
                  </Text>
                  <Text textStyle={"md"}>
                    Make quicker decisions using real-time analytics and trends.
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    pointerEvents={"none"}
                    bg={"gray.100"}
                    color={"black"}
                  >
                    <BarChart />
                  </IconButton>
                  <Text textStyle={"xl"} fontWeight={"bold"}>
                    Easy Administration
                  </Text>
                  <Text textStyle={"md"}>
                    Access all your finanical data in one dashboard no more
                    switching platforms
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    pointerEvents={"none"}
                    bg={"gray.100"}
                    color={"black"}
                  >
                    <Lock />
                  </IconButton>
                  <Text textStyle={"xl"} fontWeight={"bold"}>
                    Advanced Protection Solutions
                  </Text>
                  <Text textStyle={"md"}>
                    Your data stays protected with encryption and multi-factor
                    authentication.
                  </Text>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Flex>
      </Stack>
    </Theme>
  );
};

export default MakesUnique;
