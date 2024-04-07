import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";
import NavbarHome from "../components/NavbarHome";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          {router.pathname !== "/login" ? <Navbar /> : <NavbarHome />}
        </header>
        <main>{children}</main>
        {router.pathname !== "/login" && router.pathname !== "/signup" && (
          <footer>
            <Footer />
          </footer>
        )}
      </Box>
    </>
  );
};

export default Layout;
