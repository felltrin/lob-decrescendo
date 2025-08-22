import { Flex, Icon, Text } from "@chakra-ui/react";
import { AlignLeft, Bell, Search } from "lucide-react";
import React from "react";
import DropdownMenu from "./DropdownMenu";

const Dashboard = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} gap={3}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <img
          src="/logo-for-dashvibe.png"
          alt="dashvibe logo"
          width={32}
          height={32}
        />
        <Text color={"black"} fontSize={28} fontWeight={"semibold"}>
          Dashvibe
        </Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Flex alignItems={"start"} justifyContent={"center"}>
          <Icon color={"black"}>
            <AlignLeft />
          </Icon>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
          <Icon color={"black"}>
            <Search />
          </Icon>
          <Icon color={"black"}>
            <Bell />
          </Icon>
          <Text color={"gray.300"} textStyle={"xl"}>
            {" "}
            |{" "}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <img
          src="/circle-headshot-girl.png"
          alt="dashboard headshot"
          width={48}
          height={16}
        />
        <DropdownMenu text={"Abdur Rahman"} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
