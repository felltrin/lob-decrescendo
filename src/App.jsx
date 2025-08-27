import {
  Container,
  Flex,
  Stack,
  Text,
  Button,
  Icon,
  Image,
  Theme,
  Card,
} from "@chakra-ui/react";
import { ChevronRight, Star } from "lucide-react";
import Navbar from "./components/Navbar";
import SolutionCard from "./components/SolutionCard";
import Demo from "./components/Demo";
import LiveBudgetCard from "./components/LiveBudgetCard";
import RevenueExpenseCard from "./components/RevenueExpenseCard";
import SalesCard from "./components/SalesCard";
import PersonalizeCard from "./components/PersonalizeCard";
import ObjectivePlanningCard from "./components/ObjectivePlanningCard";
import Footer from "./components/Footer";
import MakesUnique from "./components/MakesUnique";
import SubscriptionCard from "./components/SubscriptionCard";

function App() {
  return (
    <>
      <Container bg={"#f6faff"} maxW={"full"} py={6} px={6}>
        <Container bg={"#328399"} maxW={"full"} pt={4} rounded={"4xl"}>
          <Stack minH={"100vh"}>
            <Navbar />
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              pt={12}
              pb={3}
            >
              <Flex wrap="wrap" maxW={"700px"}>
                <Text
                  fontWeight={"semibold"}
                  textStyle={"5xl"}
                  textAlign={"center"}
                >
                  Redesign Your Workplace for Lasting Calm
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"} pb={2}>
              <Flex wrap={"wrap"} maxW={"600px"}>
                <Text textStyle={"lg"} textAlign={"center"}>
                  Enhance team performance and wellness through our smart
                  digital mental health solution
                </Text>
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              mb={8}
            >
              <Button
                bg={"#b9eb8e"}
                color={"white"}
                _hover={{ bg: "#e04e2c" }}
                display={{ base: "none", md: "block" }}
              >
                Try Free for 14 Days
                <Icon size={"lg"}>
                  <ChevronRight />
                </Icon>
              </Button>
              <Button>Book a demo</Button>
            </Flex>
            <Image
              src="/dashboard-screen.png"
              alt="dashboard screenshot"
              roundedTop={"3xl"}
            />
          </Stack>
        </Container>

        <Container maxW={"full"} py={14}>
          <Text color={"gray.500"} textAlign={"center"} textStyle={"2xl"} p={3}>
            Top industry leaders rely on Dashvibe to boost revenue
          </Text>
          <img src="/logo-credibility.png" alt="picture with logos" />
        </Container>
      </Container>
      <Container maxW={"full"} bg={"#ffffff"} py={6}>
        <Stack minH={"100vh"} pb={28}>
          <Flex alignItems={"center"} justifyContent={"center"} pt={12} pb={3}>
            <Text
              fontWeight={"semibold"}
              textStyle={"4xl"}
              textAlign={"center"}
              color={"black"}
            >
              Empowering entreprenuers to increase their income
            </Text>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} pb={12}>
            <Flex wrap={"wrap"} maxW={"700px"}>
              <Text textStyle={"lg"} textAlign={"center"} color={"gray.500"}>
                We've simplified product and growth analytics to boost user
                conversion, engagement, and retention
              </Text>
            </Flex>
          </Flex>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <SolutionCard
              source={"/solution-bar-screen.png"}
              footerHeading={"Cash Flow Analytics"}
              footerSubHeading={
                "Generate and send professional invoices to clients for quicker payments"
              }
            />
            <SolutionCard
              source={"/solution-chart-screen.png"}
              footerHeading={"Multiple Account Sync"}
              footerSubHeading={
                "Open multi-currency business accounts to unlock global revenue streams"
              }
            />
            <SolutionCard
              source={"/solution-screen-one.png"}
              footerHeading={"Automated Accounting"}
              footerSubHeading={
                "Easily track expenses and manage your budget with confidence."
              }
            />
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} pt={32} pb={3}>
            <Text
              fontWeight={"semibold"}
              textStyle={"4xl"}
              textAlign={"center"}
              color={"black"}
            >
              Innovative tools for powerful analytics and insights
            </Text>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} pb={12}>
            <Flex wrap={"wrap"} maxW={"600px"}>
              <Text textStyle={"lg"} textAlign={"center"} color={"gray.500"}>
                Simplifed analytics to increase user conversion, engagement, and
                retention
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} gap={3} mb={1}>
            <LiveBudgetCard />
            <RevenueExpenseCard />
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
            <SalesCard />
            <PersonalizeCard />
            <ObjectivePlanningCard />
          </Flex>
        </Stack>
        <MakesUnique />
      </Container>
      <Footer />
    </>
  );
}

export default App;
