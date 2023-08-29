import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default function ResultsSearch({ changeSearchTerm }) {
  const storedTerm = String(localStorage.getItem('term'));
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();
  const goToResults = () => navigate('/directory');
  const viewAll = (e) => {
    console.log('good');
  };
  useEffect(() => {
    localStorage.setItem('term', String(term));
  }, [term]);
  const changeTerm = (event) => {
    setTerm(event.target.value);

    /*navigate('/results');*/
  };
  return (
    <>
      <Flex direction="row">
        <Wrap spacing="4px" width={'100%'} justify="space-between">
          <WrapItem w={['100%', null, '77%']}>
            <InputGroup size={'lg'} w="100%">
              <Input
                bg="white"
                id="searchBar"
                type="text"
                focusBorderColor="accent2"
                placeholder={'Enter Search keywords...'}
                w="100%"
                onChange={changeTerm}
                shadow="lg"
              />
            </InputGroup>
          </WrapItem>

          <WrapItem w={['100%', null, '21%']}>
            <Button
              size={'lg'}
              bgColor={'accent2'}
              w={'100%'}
              shadow="lg"
              opacity={1}
              onClick={() => changeSearchTerm(term)}
            >
              Search
            </Button>
          </WrapItem>
        </Wrap>
      </Flex>

      {window.location.pathname == '/directory' ? (
        <Center>
          <Button
            bgColor="accent2"
            mt={'20px'}
            size={'md'}
            onClick={() => changeSearchTerm('')}
          >
            View All
          </Button>
        </Center>
      ) : (
        <Center justifyContent={'right'}>
          <Button
            bgColor="accent2"
            mt={'8px'}
            size={'md'}
            width={'200px'}
            onClick={() => changeSearchTerm('')}
          >
            View All
          </Button>
        </Center>
      )}
    </>
  );
}
