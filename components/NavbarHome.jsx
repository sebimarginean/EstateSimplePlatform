import { Box, Text, Spacer, Divider } from "@chakra-ui/react";
import Link from "next/link";

const NavbarHome = () => (
  <>
    <Spacer />
    <Box fontSize="4xl" color="blue.400" fontWeight="bold" mt="3" mb="3">
      <Text textAlign="center" fontFamily={"heading"}>
        <Link href="/">Navbar Title</Link>
      </Text>
    </Box>
    <Spacer />
    <Divider borderColor="blue.400" />
  </>
);

export default NavbarHome;
