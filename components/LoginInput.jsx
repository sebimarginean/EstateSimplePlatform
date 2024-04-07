import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { signOut } from "next-auth/react";
import { useState } from "react";

import { PasswordField } from "./PasswordField";

const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validButton =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) &&
    email &&
    password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validButton) alert(JSON.stringify(email, null, 4));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing="6">
          <Stack spacing="6" mt={{ base: "0", md: "8" }}>
            <Logo />
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                borderColor="#C5C5C5"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <PasswordField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Button
            type="submit"
            variant="primary"
            backgroundColor={validButton ? "#3182CE" : "#C7C7C7"}
            color="white"
            cursor={validButton ? "pointer" : "default"}
          >
            Sign in
          </Button>
          <Stack spacing="6">
            <button onClick={() => signOut()}>Sign Out</button>
            <HStack>
              <Divider borderColor="#949494" />
              <Text fontSize="sm" whiteSpace="nowrap" color="#949494">
                OR
              </Text>
              <Divider borderColor="#949494" />
            </HStack>
          </Stack>
        </Stack>
      </form>
    </>
  );
};
export default LoginInput;
