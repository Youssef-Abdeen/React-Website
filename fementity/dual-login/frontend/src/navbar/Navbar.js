import React from 'react'
import { Link as RouteLink } from 'react-router-dom';
import { Flex, Stack, Button } from '@chakra-ui/react';
import { useUserAuth } from '../context/UserAuthContext';


export default function Navbar() {

  const { user, logOut } = useUserAuth();

  return (
  <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={{ sm: '0.6rem', md: '0.5.80rem', lg: '1rem', xl: '1rem' }}
      bg="background"
      py="5px"
      color="primary"
      borderBottom="2px solid"
      borderBottomColor="accent"
    >
      <Stack
        layerStyle="pageLayout"
        isInline
        alignItems="center"
        flexWrap="wrap"
        spacing={{ md: 4, lg: 6 }}
        px={4}
      >
        <RouteLink to="/">Home</RouteLink>
        {!user && <RouteLink to="/memberships">Memberships</RouteLink>}
        {!user && <RouteLink to="/member-form">Member Form</RouteLink>}
        {!user && <RouteLink to="/member-form-free">Member Form Free</RouteLink>}
        {!user && <RouteLink to="/business-form">Business Form</RouteLink>}
        {user  && <RouteLink to="/member-page">Member Page</RouteLink>}
        <RouteLink to="/business-page">Business Page</RouteLink>
        {!user && <RouteLink to="/login">Login</RouteLink>}
        {/*(user && <RouteLink to="/" onClick={() => this.logOut}>Logout</RouteLink>)*/}
        {user && <Button type="submit" color={'primary'} variant={'link'} onClick={logOut}>Logout</Button>}

        

      </Stack>
    </Flex>
  );
}
