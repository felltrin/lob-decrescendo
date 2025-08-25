import { Card, Flex, IconButton, Table, Text, Theme } from "@chakra-ui/react";
import { ArrowDown, ArrowUp, Circle, Ellipsis } from "lucide-react";
import { Chart, useChart } from "@chakra-ui/charts";
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts";

const SalesCard = () => {
  const chart = useChart({
    data: [
      { id: 1, name: "Current week", value: 2500, color: "#328299" },
      { id: 2, name: "Last week", value: 1000, color: "#B6EB8E" },
    ],
  });

  return (
    <Card.Root
      bg={"#f6faff"}
      variant={"subtle"}
      border={"2px solid"}
      borderColor={"gray.100"}
      rounded={"xl"}
      minW={"sm"}
      minH={"xs"}
    >
      <Card.Header>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Card.Title color={"black"} fontWeight={"semibold"}>
            Sales
          </Card.Title>
          <IconButton bg={"#f6faff"} _hover={{ bg: "#000", color: "white" }}>
            <Ellipsis />
          </IconButton>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Theme appearance="light" bg={"#f6faff"}>
          <Chart.Root boxSize={"200px"} chart={chart} mx={"auto"}>
            <PieChart>
              <Tooltip
                cursor={false}
                animationDuration={100}
                content={<Chart.Tooltip />}
              />
              <Pie
                innerRadius={80}
                outerRadius={100}
                isAnimationActive={false}
                data={chart.data}
                dataKey={chart.key("value")}
                nameKey="name"
              >
                <Label
                  content={({ viewBox }) => (
                    <Chart.RadialText
                      viewBox={viewBox}
                      title={chart.getTotal("value").toLocaleString()}
                      description="Total"
                    />
                  )}
                />
                {chart.data.map((item) => {
                  return (
                    <Cell key={item.name} fill={chart.color(item.color)} />
                  );
                })}
                <Cell />
              </Pie>
            </PieChart>
          </Chart.Root>
        </Theme>
      </Card.Body>
      <Card.Footer>
        <Table.Root variant={"simple"} color={"black"}>
          <Table.Caption />
          <Table.Body>
            {chart.data.map((item) =>
              item.name === "Current week" ? (
                <Table.Row key={item.id}>
                  <Table.Cell color={"gray.400"}>
                    <Flex alignItems={"center"} gap={1}>
                      <Circle size={12} color={"teal"} fill="teal" />
                      {item.name}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>{item.value}</Table.Cell>
                  <Table.Cell
                    textAlign="end"
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"#B6EB8E"}
                  >
                    <Flex alignItems={"center"} justifyContent={"end"}>
                      <ArrowUp size={12} />
                      <Text fontWeight={"semibold"}>8.6%</Text>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ) : (
                <Table.Row key={item.id}>
                  <Table.Cell color={"gray.400"}>
                    <Flex alignItems={"center"} gap={1}>
                      <Circle size={12} color={"#B6EB8E"} fill="#B6EB8E" />
                      {item.name}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>{item.value}</Table.Cell>
                  <Table.Cell color={"red.300"}>
                    <Flex alignItems={"center"} justifyContent={"end"}>
                      <ArrowDown size={12} />
                      <Text fontWeight={"semibold"}>5.8%</Text>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table.Root>
      </Card.Footer>
    </Card.Root>
  );
};

export default SalesCard;
