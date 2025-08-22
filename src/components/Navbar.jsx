import { Box, Button, Container, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <Container maxW={"1300px"}>
      <Box bg={"#ffffff"} px={4} my={4} borderRadius={5} rounded={"2xl"}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* Logo Side */}
          <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
            <img
              src="/logo-for-dashvibe.png"
              alt="dashvibe logo"
              width={32}
              height={32}
            />
            <Text fontSize={"28px"} color={"black"} fontWeight={"bold"}>
              Dashvibe
            </Text>
          </Flex>
          {/* Center */}
          <Flex
            alignItems={"center"}
            justifyContent={"space-inbetween"}
            gap={10}
            display={{ base: "none", sm: "flex" }}
          >
            <DropdownMenu text={"Our Solutions"} />
            <DropdownMenu text={"Helpful Tools"} />
            <Text fontWeight={"bold"} color={"black"} fontSize={"sm"}>
              Plans
            </Text>
            <Text fontWeight={"bold"} color={"black"} fontSize={"sm"}>
              FAQs
            </Text>
          </Flex>
          {/* CTA Button */}
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"#b9eb8e"}
              color={"white"}
              _hover={{ bg: "#e04e2c" }}
              display={{ base: "none", md: "block" }}
            >
              Schedule a Call
              <Icon size={"lg"}>
                <ChevronRight />
              </Icon>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
