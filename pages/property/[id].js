import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { Center } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import ad from "../../assets/images/ad.jpg";
import video from "../../assets/images/video.jpg";
import banner from "../../assets/images/banner.png";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1300px" margin="auto" p="4">
    <Flex>
      <Box flex="4" ml={8} mr={10} margin="auto">
        <Image src={banner} flex="1" height={150} />
      </Box>
      <Box flex={{ base: "0", md: "1" }}></Box>
    </Flex>
    <Flex flexWrap="wrap">
      <Box overflow="hidden" flex="4">
        {photos && <ImageScrollbar data={photos} />}
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        flex={{ base: "0", md: "1" }}
      >
        <Box>
          <Image src={ad} width={400} height={400} />
        </Box>
        <Box>
          <Image src={ad} width={400} height={400} />
        </Box>
      </Box>
    </Flex>
    <Flex>
      <Box flex="4" ml={8} mr={10} margin="auto">
        <Image src={banner} flex="1" height={150} />
      </Box>
      <Box flex={{ base: "0", md: "1" }}></Box>
    </Flex>
    <Flex>
      <Box flex="4">
        <Box w="full" p="6">
          <Flex paddingTop="2" alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              USD {price} {rentFrequency && `/${rentFrequency}`}
            </Text>
            <Spacer />
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
        </Box>
        <Box marginTop="2">
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight="2" color="gray.600">
            {description}
          </Text>
        </Box>
        <Flex
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
        >
          <Flex
            justifyContent="space-between"
            w="100%"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="100%"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              w="100%"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities.length && (
            <Text fontSize="2xl" fontWeight="black" marginTop="5">
              Facilites:
            </Text>
          )}
          <Flex flexWrap="wrap">
            {amenities?.map((item) =>
              item?.amenities?.map((amenity) => (
                <Text
                  key={amenity.text}
                  fontWeight="bold"
                  color="blue.400"
                  fontSize="l"
                  p="2"
                  bg="gray.200"
                  m="1"
                  borderRadius="5"
                >
                  {amenity.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>
      </Box>
      <Box flex={{ base: "0", md: "1" }}>
        <Image src={video} width={1000} height={500} />
        <Image src={video} width={1000} height={500} />
        <Image src={video} width={1000} height={500} />
      </Box>
    </Flex>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
