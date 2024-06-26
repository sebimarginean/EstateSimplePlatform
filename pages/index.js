import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} />
    <Box p="5">
      <Text color="#c6c6c6" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="#c6c6c6">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Flex flexWrap="wrap" justify="center" marginTop="65">
      {propertiesForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
    <Banner
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1=" Explore from Apartments, builder floors, villas"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
    />

    <Flex flexWrap="wrap" justify="center">
      {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
    <Banner
      purpose="BUY A HOME"
      title1=" Find, Buy & Own Your"
      title2="Dream Home"
      desc1=" Explore from Apartments, land, builder floors,"
      desc2=" villas and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
    />
  </Box>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
