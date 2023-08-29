import {
  Heading,
  VStack,
  Flex,
  Text,
  Tag,
  HStack,
  TagLabel,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import ResultFilters from './ResultFilters';
import ResultsSearch from './ResultsSearch';
import ResultCard from './ResultCard';
import { useNavigate } from 'react-router-dom';

export default function Directory() {
  const [businesses, setBusinesses] = useState([]);
  const storedTerm = String(localStorage.getItem('term'));
  const [term, setTerm] = useState(storedTerm);
  const storedLocation = String(localStorage.getItem('filterLocation'));
  const storedCategory = String(localStorage.getItem('filterCategory'));
  const storedService = String(localStorage.getItem('filterService'));
  const [filterLocation, setFilterLocation] = useState(storedLocation);
  const [filterCategory, setFilterCategory] = useState(storedCategory);
  const [filterService, setFilterService] = useState(storedService);

  const navigate = useNavigate();
  const goToResults = () => navigate('/results');

  const changeSearchTerm = (searchTerm) => {
    setTerm(searchTerm);
    window.location.reload(false);
  };

  const changeFilters = (category, location, service) => {
    setFilterCategory(category);
    setFilterLocation(location);
    setFilterService(service);
    window.location.reload(false);
  };

  useEffect(() => {
    localStorage.setItem('term', String(term));
  }, [term]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(
          'http://localhost:4000/api/business/search?term=' + term,
        );
        const all = await response.json();
        setBusinesses(all);
      } catch (error) {
        console.log(error.stack);
      }
    };



    (async () => await fetchBusinesses())();
  }, []);

  return (
    <Flex direction={['column', null, 'row']} width="100%">
      <ResultFilters changeFilters={changeFilters} />
      <Flex direction="column" pt={['15px', null, '0']} width="100%">
        <Heading>BUSINESS DIRECTORY</Heading>
        <ResultsSearch changeSearchTerm={changeSearchTerm} />
        <VStack mt={5} align={'start'} pl={'10px'}>
          <HStack spacing={4}>
            <Text>Filters: </Text>
            {storedCategory != 'Category' ? (
              <Tag size="lg" variant="solid" colorScheme="blackAlpha">
                <TagLabel>{storedCategory}</TagLabel>
              </Tag>
            ) : (
              <></>
            )}
            {storedLocation != 'Location' ? (
              <Tag size="lg" variant="solid" colorScheme="blackAlpha">
                {storedLocation}
              </Tag>
            ) : (
              <></>
            )}
            {storedService != 'Service' ? (
              <Tag size="lg" variant="solid" colorScheme="blackAlpha">
                <TagLabel>{storedService}</TagLabel>
              </Tag>
            ) : (
              <></>
            )}
          </HStack>
          {term != '' ? (
            <Text align={'left'}>
              Results for <Text as="i">{term}</Text>:
            </Text>
          ) : (
            <></>
          )}

          {businesses
            .filter(
              storedLocation != 'Location'
                ? (business) => business.location == storedLocation
                : (business) => business.location != 'Location',
            )
            .filter(
              storedCategory != 'Category'
                ? (business) => business.business_category == storedCategory
                : (business) => business.business_category != 'Category',
            )
            .filter(
              storedService != 'Service'
                ? (business) => business.service == storedService
                : (business) => business.service != 'Service',
            )
            .map((business) => (
              <ResultCard
                key={business.id}
                businessName={business.business_name}
                businessSlug={business.business_slug}
                location={business.location}
                description={business.description}
              />
            ))}
        </VStack>
      </Flex>
    </Flex>
  );
}
