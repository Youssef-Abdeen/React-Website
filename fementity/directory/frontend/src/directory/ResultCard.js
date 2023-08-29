import React from 'react';
import {
  Box,
  Button,
  Center,
  Text,
  Wrap,
  WrapItem,
  Image,
  VStack,
  Heading,
} from '@chakra-ui/react';
import pic1 from './img/femLogo.png';
import { useNavigate } from 'react-router-dom';

export default function ResultCard(data) {
  const navigate = useNavigate();
  const goTobusiness = () => {
    navigate('/business/' +data.businessSlug)
  }
  return (
    <Box p={5} width="100%" bg="white" shadow="md" borderWidth="1px">
      <Wrap>
        <WrapItem>
          <Image boxSize="150px" src={pic1} alt="Fementity logo" />
          <VStack align="stretch" pl={2}>
            <Heading fontSize="xl">{data.businessName}</Heading>
            <Text>{data.location}</Text>
            <Text>{data.description}</Text>
          </VStack>
        </WrapItem>
      </Wrap>
      <Center>
        <Button size="sm" bgColor="accent2" width="15%" onClick={goTobusiness}>
          View
        </Button>
      </Center>
    </Box>
  );
}
