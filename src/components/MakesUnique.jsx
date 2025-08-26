import { IconButton, Image, Stack, Table, Text, Theme } from "@chakra-ui/react";
import { BarChart, LineChart, Lock, Timer, Unlink, Wrench } from "lucide-react";

const MakesUnique = () => {
  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  ];

  return (
    <Theme appearance="light">
      <Stack>
        <Text>What Makes Dashvibe Different?</Text>
        <Text>
          Transform the Way You Manage Finances with These Key Advantages and
          Powerful Features
        </Text>
        <Image
          src="make-different-screen.png"
          alt="screen for uhhh..."
          rounded={"2xl"}
        />
        <Table.Root size="sm" showColumnBorder>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <IconButton pointerEvents={"none"}>
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
                <IconButton pointerEvents={"none"}>
                  <LineChart />
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
                <IconButton pointerEvents={"none"}>
                  <Wrench />
                </IconButton>
                <Text textStyle={"xl"} fontWeight={"bold"}>
                  Effortless Connectivity
                </Text>
                <Text textStyle={"md"}>
                  Easily connect Dashvibe with your current ERP, CRM, or
                  accounting tools
                </Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <IconButton pointerEvents={"none"}>
                  <Timer />
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
                <IconButton pointerEvents={"none"}>
                  <BarChart />
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
                <IconButton pointerEvents={"none"}>
                  <Lock />
                </IconButton>
                <Text textStyle={"xl"} fontWeight={"bold"}>
                  Effortless Connectivity
                </Text>
                <Text textStyle={"md"}>
                  Easily connect Dashvibe with your current ERP, CRM, or
                  accounting tools
                </Text>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Stack>
    </Theme>
  );
};

export default MakesUnique;
