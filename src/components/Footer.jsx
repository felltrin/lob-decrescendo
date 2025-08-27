import {
  Container,
  Flex,
  IconButton,
  Stack,
  Text,
  Theme,
  Table,
} from "@chakra-ui/react";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Theme appearance="light">
      <Container maxW={"5/6"} bg={"#fff"}>
        <Flex alignItems={"start"} justifyContent={"space-between"}>
          <Flex pt={8}>
            <Stack minH={"fill"} alignItems={"baseline"} py={6} gap={6}>
              <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
                <img
                  src="/logo-for-dashvibe.png"
                  alt="dashvibe logo"
                  width={32}
                  height={32}
                />
                <Text fontSize={"34px"} color={"black"} fontWeight={"bold"}>
                  Dashvibe
                </Text>
              </Flex>
              <Flex maxW={"325px"}>
                <Text>
                  Driving smarter financial decisions, from start to scale.
                </Text>
              </Flex>
              <Flex gap={2}>
                <IconButton rounded={"3xl"} bg={"gray.100"} color={"gray.400"}>
                  <FaGoogle />
                </IconButton>
                <IconButton rounded={"3xl"} bg={"gray.100"} color={"gray.400"}>
                  <FaTwitter />
                </IconButton>
                <IconButton rounded={"3xl"} bg={"gray.100"} color={"gray.400"}>
                  <FaLinkedin />
                </IconButton>
                <IconButton rounded={"3xl"} bg={"gray.100"} color={"gray.400"}>
                  <FaInstagram />
                </IconButton>
              </Flex>
            </Stack>
          </Flex>

          <Flex gap={182} pt={16}>
            <Stack minH={"fill"} alignItems={"baseline"} gap={2}>
              <Text textStyle={"sm"} color={"gray.400"}>
                Resources
              </Text>
              <Text>Help Center</Text>
              <Text>Case Studies</Text>
              <Text>API Docs</Text>
              <Text>Blog</Text>
            </Stack>
            <Stack minH={"fill"} alignItems={"baseline"} gap={2}>
              <Text textStyle={"sm"} color={"gray.400"}>
                Product
              </Text>
              <Text>Expense Tracking</Text>
              <Text>Integrations</Text>
              <Text>Invoicing</Text>
              <Text>Analytics</Text>
            </Stack>
            <Stack minH={"fill"} alignItems={"baseline"} gap={2}>
              <Text textStyle={"sm"} color={"gray.400"}>
                Company
              </Text>
              <Text>Privacy Policy</Text>
              <Text>About Us</Text>
              <Text>Careers</Text>
              <Text>Contact</Text>
            </Stack>
          </Flex>
        </Flex>
        <Flex>
          <Table.Root>
            <Table.Body>
              <Table.Row>
                <Table.Cell />
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                pt={23}
              >
                <Text color={"gray.300"}>
                  © 2025 Dashvibe All rights reserved
                </Text>
                <Text color={"white"}>Designed by Abdur Barham</Text>
              </Flex>

              <Table.Row>
                <Table.Cell />
              </Table.Row>
            </Table.Footer>
          </Table.Root>
        </Flex>
      </Container>
    </Theme>
  );
};

export default Footer;
