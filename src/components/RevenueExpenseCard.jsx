import {
  Card,
  Flex,
  Stack,
  Text,
  Menu,
  Button,
  Icon,
  Portal,
  Box,
  IconButton,
} from "@chakra-ui/react";
import {
  ArrowDown,
  ArrowUp,
  CalendarDays,
  ChevronDown,
  ClipboardPaste,
  Copy,
  Scissors,
} from "lucide-react";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RevenueExpenseCard = () => {
  const chart = useChart({
    data: [
      { sale: 0, month: "Mon" },
      { sale: 95, month: "Tue" },
      { sale: 87, month: "Wed" },
      { sale: 88, month: "Thur" },
      { sale: 65, month: "Fri" },
      { sale: 90, month: "Sat" },
      { sale: 90, month: "Sun" },
    ],
    series: [{ name: "sale", color: "teal.solid" }],
  });

  return (
    <Card.Root
      bg={"#f6faff"}
      variant={"subtle"}
      border={"2px solid"}
      borderColor={"gray.100"}
      minW={"1/3"}
      rounded={"xl"}
    >
      <Card.Root
        bg={"white"}
        rounded={"md"}
        m={6}
        variant={"subtle"}
        border={"2px solid"}
        borderColor={"gray.200"}
      >
        <Card.Header>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Card.Title color={"black"}>Analytics</Card.Title>
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button>
                  <CalendarDays />
                  19 Aug - 25 Aug
                  <Icon>
                    <ChevronDown />
                  </Icon>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item>
                      <Scissors />
                      <Box>Cut</Box>
                      <Menu.ItemCommand>⌘X</Menu.ItemCommand>
                    </Menu.Item>
                    <Menu.Item>
                      <Copy />
                      <Box>Copy</Box>
                      <Menu.ItemCommand>⌘C</Menu.ItemCommand>
                    </Menu.Item>
                    <Menu.Item>
                      <ClipboardPaste />
                      <Box>Paste</Box>
                      <Menu.ItemCommand>⌘V</Menu.ItemCommand>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Flex>
        </Card.Header>
        <Card.Body>
          <Flex gap={12} mb={4}>
            <Flex alignItems={"center"} gap={3}>
              <IconButton
                bg={"#d5e7ec71"}
                pointerEvents={"none"}
                rounded={"xl"}
              >
                <ArrowUp color="#328299" />
              </IconButton>
              <Text color={"black"} textStyle={"lg"}>
                $5.890
              </Text>
            </Flex>
            <Flex alignItems={"center"} gap={3}>
              <IconButton
                bg={"#ecf3e79c"}
                pointerEvents={"none"}
                rounded={"xl"}
              >
                <ArrowDown color="#b6eb8e" />
              </IconButton>
              <Text color={"black"} textStyle={"lg"}>
                $1.750
              </Text>
            </Flex>
          </Flex>
          <Chart.Root maxH={"sm"} chart={chart}>
            <LineChart data={chart.data} margin={{ left: 20, right: 40 }}>
              <CartesianGrid
                stroke={chart.color("#e4e8edff")}
                horizontal={false}
              />
              <XAxis
                axisLine={false}
                dataKey={chart.key("month")}
                tickLine={false}
                stroke={chart.color("#e4e8edff")}
              />
              <ReferenceLine y={0} stroke={chart.color("#e4e8edff")} />
              <Tooltip
                animationDuration={100}
                cursor={false}
                content={<Chart.Tooltip />}
              />
              {chart.series.map((item) => (
                <Line
                  key={item.name}
                  isAnimationActive={false}
                  dataKey={chart.key(item.name)}
                  stroke={chart.color(item.color)}
                  strokeWidth={2}
                  fill={chart.color("white")}
                  opacity={chart.getSeriesOpacity(item.name)}
                />
              ))}
            </LineChart>
          </Chart.Root>
        </Card.Body>
      </Card.Root>
      <Card.Footer alignItems={"center"} justifyContent={"center"}>
        <Stack alignItems={"center"}>
          <Text color={"black"} textStyle={"2xl"}>
            Revenue & Expense Analysis
          </Text>
          <Flex wrap={"wrap"} maxW={"500px"}>
            <Text color={"gray.500"} textAlign={"center"}>
              Track your expenses easily and stay on top of your budget faster
              and smarter.
            </Text>
          </Flex>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
};

export default RevenueExpenseCard;
