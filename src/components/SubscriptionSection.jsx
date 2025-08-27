import SubscriptionCard from "./SubscriptionCard";
import { Container, Flex, Stack, Text, Theme } from "@chakra-ui/react";

const SubscriptionSection = () => {
  return (
    <Theme appearance="light">
      <Container maxW={"full"} bg={"#f6faff"}>
        <Stack minH={"100vh"} alignItems={"center"} pt={34} gap={3}>
          <Text fontWeight={"semibold"} textStyle={"4xl"} color={"black"}>
            Subscriptions
          </Text>
          <Text textStyle={"xl"} textAlign={"center"} color={"gray.500"}>
            Pick the Ideal Plan to Match Your Financial Goals
          </Text>
          <Flex gap={4} pt={34}>
            <SubscriptionCard
              subscriptionTier={"Starter Plan"}
              subscriptionPrice={19}
              subscriptionDesc={"For teams with up to 20 members"}
              checklistItems={[
                "Simple Mood Check-In & Monitoring",
                "Customized Mindfulness Center",
                "Led Mindfulness Exercises",
                "Zen Space (Core Features)",
                "Self-Improvement Monitor",
              ]}
            />
            <SubscriptionCard
              subscriptionTier={"Pro Plan"}
              subscriptionPrice={29}
              subscriptionDesc={"Mid-sized companies with 100 employees"}
              isProPlan
              checklistItems={[
                "Complete Productivity Tracking Tools",
                "Basic Team Mindfulness Stats",
                "Led Mindfullness Exercises",
                "Enhanced Mood Insights",
                "Core Integration Center",
              ]}
            />
            <SubscriptionCard
              subscriptionTier={"Enterprise Plan"}
              subscriptionPrice={"Custom"}
              subscriptionDesc={"Mid-sized companies with 200 employees"}
              isEnterprise
              checklistItems={[
                "Enhanced Team Mindfulness Analytics",
                "Available Training and Assistance",
                "Yearly Wellness Planning Session",
                "Tailored Reports and Insights",
                "Persoal Account Manager",
              ]}
            />
          </Flex>
        </Stack>
      </Container>
    </Theme>
  );
};

export default SubscriptionSection;
