import { ChevronUpIcon, PhoneIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Flex,
  Text,
  Heading,
  Stack,
  StackItem,
  Divider,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultsSearch from './ResultsSearch';
import pic1 from './img/group_photo_1.jpeg';

export default function Directory() {
  const [term, setTerm] = useState('');

  const navigate = useNavigate();
  const goToResults = () => navigate('/results');

  const changeSearchTerm = (searchTerm) => {
    setTerm(searchTerm);
    goToResults();
  };
  return (
    <Flex
      direction="column"
      width={'100%'}
      bgColor={'background'}
      bgImage={pic1}
      pos={'absolute'}
      top={191}
      right={0}
      left={0}
      bottom={0}
    >
      <Stack
        bgColor={'primary'}
        mt={'6%'}
        pl={'14%'}
        pr={'14%'}
        shadow="xl"
        opacity={0.97}
      >
        <StackItem pt={'4%'}>
          <Heading as="h1" size="4xl" mt="2vh" mb="2vh" opacity={1}>
            Directory
          </Heading>
          <Text fontFamily={'subheading'} mb="8%" opacity={1}>
            Search and find businesses in our Business Directory.
          </Text>
          <Divider w={'100%'} />
        </StackItem>
        <StackItem pt="2vh" pb={'10vh'} opacity={1}>
          <ResultsSearch changeSearchTerm={changeSearchTerm} />
        </StackItem>
      </Stack>
    </Flex>
  );
}
