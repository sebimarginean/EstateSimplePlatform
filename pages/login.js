import {
  Box,
  Container,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { OAuthButtonGroup } from "../components/OAuthButtonGroup";
import LoginInput from "../components/LoginInput";

const Login = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: "25%", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack
        spacing="8"
        border="1px"
        borderColor={{ base: "white", md: "#DADCE0" }}
        borderRadius="xl"
        boxShadow="sm"
      >
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <LoginInput />
          <Box mt={6}>
            <OAuthButtonGroup />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
export default Login;
