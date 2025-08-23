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
} from "@chakra-ui/react";
import {
  CalendarDays,
  ChevronDown,
  ClipboardPaste,
  Copy,
  Scissors,
} from "lucide-react";

const RevenueExpenseCard = () => {
  return (
    <Card.Root
      bg={"#f6faff"}
      variant={"subtle"}
      border={"2px solid"}
      borderColor={"gray.100"}
      minW={"1/3"}
      rounded={"xl"}
    >
      <Card.Header>
        <Flex alignItems={"cener"} justifyContent={"space-between"}>
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
                    <Box>Pase</Box>
                    <Menu.ItemCommand>⌘V</Menu.ItemCommand>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Flex>
      </Card.Header>
      <Card.Body />
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
