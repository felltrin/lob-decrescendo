import { Chart, useChart } from "@chakra-ui/charts";
import {
  Card,
  Flex,
  Stack,
  Text,
  Box,
  Button,
  Menu,
  Portal,
  Icon,
} from "@chakra-ui/react";
import {
  CalendarDays,
  ChevronDown,
  ClipboardPaste,
  Copy,
  Scissors,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const Demo = () => {
  const chart = useChart({
    data: [
      { sales: 275, expenses: 23, profit: 30, type: "Mon" },
      { sales: 275, expenses: 23, profit: 30, type: "Tue" },
      { sales: 275, expenses: 23, profit: 30, type: "Wed" },
      { sales: 275, expenses: 23, profit: 30, type: "Thur" },
      { sales: 275, expenses: 23, profit: 30, type: "Fri" },
      { sales: 275, expenses: 23, profit: 30, type: "Sat" },
      { sales: 275, expenses: 23, profit: 30, type: "Sun" },
    ],
    series: [
      { name: "sales", color: "teal.solid", stackId: "a" },
      { name: "expenses", color: "red.solid", stackId: "a" },
      { name: "profit", color: "orange.fg", stackId: "a" },
    ],
  });

  return (
    <Card.Root
      bg={"#f6faff"}
      color={"black"}
      variant={"subtle"}
      rounded={"xl"}
      minW={"2/5"}
    >
      <Card.Root
        bg={"#ffffff"}
        color={"black"}
        rounded={"md"}
        m={6}
        variant={"subtle"}
        border={"2px solid"}
        borderColor={"gray.200"}
      >
        <Card.Header>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Card.Title fontWeight={"semibold"}>Statistics</Card.Title>
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  variant="outline"
                  color={"black"}
                  _hover={{ color: "white" }}
                  rounded={"xl"}
                  borderColor={"gray.200"}
                >
                  <CalendarDays />
                  19 Aug - 25 Aug
                  <Icon size={"xs"} color={"gray.400"}>
                    <ChevronDown />
                  </Icon>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="cut">
                      <Scissors size={16} />
                      <Box flex="1">Cut</Box>
                      <Menu.ItemCommand>⌘X</Menu.ItemCommand>
                    </Menu.Item>
                    <Menu.Item value="copy">
                      <Copy size={16} />
                      <Box flex="1">Copy</Box>
                      <Menu.ItemCommand>⌘C</Menu.ItemCommand>
                    </Menu.Item>
                    <Menu.Item value="paste">
                      <ClipboardPaste size={16} />
                      <Box flex="1">Paste</Box>
                      <Menu.ItemCommand>⌘V</Menu.ItemCommand>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Flex>
        </Card.Header>
        <Card.Body pl={0}>
          <Chart.Root maxH="xs" chart={chart}>
            <BarChart data={chart.data} barSize={20}>
              <CartesianGrid
                stroke={chart.color("border.muted")}
                vertical={false}
                opacity={0.1}
              />
              <XAxis
                axisLine={false}
                tickLine={false}
                dataKey={chart.key("type")}
                tick={{ dy: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, 400]}
                tickFormatter={(value) => `${value}`}
              />
              <Legend
                align="right"
                wrapperStyle={{ paddingTop: 30 }}
                iconType="circle"
                iconSize={8}
              />
              {chart.series.map((item) => (
                <Bar
                  key={item.name}
                  isAnimationActive={false}
                  dataKey={chart.key(item.name)}
                  fill={chart.color(item.color)}
                  // radius={[10, 10, 0, 0]}
                  stackId={item.stackId}
                />
              ))}
            </BarChart>
          </Chart.Root>
        </Card.Body>
      </Card.Root>
      <Card.Footer alignItems={"center"} justifyContent={"center"}>
        <Stack alignItems={"center"}>
          <Text color={"black"} textStyle={"2xl"}>
            Live Budget Monitoring
          </Text>
          <Flex wrap={"wrap"} maxW={"450px"}>
            <Text color={"gray.500"} textAlign={"center"}>
              Ready to open multi-currency accounts and unlock global revenue
              streams?
            </Text>
          </Flex>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
};

export default Demo;
