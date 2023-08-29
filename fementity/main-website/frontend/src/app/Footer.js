import React from "react";
import { Link as ReactRouterLink } from 'react-router-dom';
import { Flex, Stack, HStack, Box, Link, Text } from '@chakra-ui/react';

export default function Footer({ children, ...props }) {
    return (
        <Flex
          as="footer"
          padding={{ sm: '0.6rem', md: '0.5.80rem', lg: '1rem', xl: '1rem' }}
          bg="background"
          py="5px"
          color="white"
          borderBottom="2px solid"
          borderBottomColor="accent"
          backgroundColor="#b97375"
          flexDirection="flex-row"
          {...props}
        >
        <Stack
          direction={'row'}
        >
            <HStack direction={'row'} spacing={20}>
              <Box maxW='md' borderRadius='md' overflow='hidden'>
              <Text fontSize={'md'}>Contact Us</Text>
              <Box><ReactRouterLink to="/">Fem Entity</ReactRouterLink></Box>
              <Text>Follow us on social media</Text>
                <HStack direction={'row'} spacing={15}>
                  <Link href='https://www.facebook.com/Fem.Entity' isExternal>Facebook</Link>
                  <Link href='https://www.instagram.com/fem.entity/' isExternal>Instagram</Link>
                  <Link href='https://www.youtube.com/channel/UClZRJbfWGUfWc3D-cLGPmyw' isExternal>YouTube</Link>
                  <Link href='https://open.spotify.com/playlist/5t2iUE9lsk6OfCFAEuCrrB' isExternal>Spotify</Link>
                </HStack>
              </Box>
              <Box>
                <ReactRouterLink to="/About">About Us</ReactRouterLink><br></br>
                <ReactRouterLink to="/">Term of Use</ReactRouterLink><br></br>
                <ReactRouterLink to="/">Privacy Policy</ReactRouterLink><br></br>
                <ReactRouterLink to="/">Jobs</ReactRouterLink><br></br>
              </Box>
            </HStack>
          </Stack>
        </Flex>
      );
}