import { Menu, Button, Icon, Portal, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

const DropdownMenu = ({ text }) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm">
          <Text fontWeight={"bold"}>{text}</Text>
          <Icon size={"md"} color={"gray.400"}>
            <ChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default DropdownMenu;
