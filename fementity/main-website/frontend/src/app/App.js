import React, { lazy, Suspense } from 'react';
import { CSSReset, Flex, Button, Image, HStack, Box, Stack } from '@chakra-ui/react';
import { Link as RouteLink, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';
import PageNotFound from './PageNotFound';
import Page from './Page';
import Footer from './Footer';
import Home from '../home/Home';
import Workshop from '../workshop/workshop';
import logo from './femLogo.png';

const About = lazy(() => import('../about/About'));

export default function App() {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bg="background">
        <header>
          <CSSReset />
          {/* put something here later? */}
        </header>

        {/* fix the marginLeft to make it more dynamic rather than hardcoding the margin sizes? */}
        <Navigation marginTop="-35px" padding={{ sm: '0', md: '0', lg: '0', xl: '0' }}>
          <RouteLink to="/about">
            <Button marginTop="50px" marginLeft={100} bg="background">
              <p>About Us</p>
            </Button>
          </RouteLink>
          <RouteLink to="/">
            <Button marginTop="50px" bg="background">
              <p>Shop</p>
            </Button>
          </RouteLink>
          <RouteLink to="/">
            <Button marginTop="50px" bg="background">
              <p>Directory</p>
            </Button>
          </RouteLink>
          <RouteLink to="/">
            <Image marginLeft={10} src={logo} boxSize="200px"></Image>
          </RouteLink>
          {/* Align these to the left side of the nav bar */}
          <RouteLink to="/workshop">
            <Button marginTop="50px" bg="background">
              <p>Events & Workshop</p>
            </Button>
          </RouteLink>
          <RouteLink to="/">
            <Button marginTop="50px" bg="background">
              <p>Memberships</p>
            </Button>
          </RouteLink>
          <RouteLink to="/">
            <Button marginTop="50px" bg="background">
              <p>User</p>
            </Button>
          </RouteLink>
        </Navigation>

        <Routes>
          <Route path="/" element={<Main />}>
            <Route
              index
              element={
                <Page title="Home">
                  <Home />
                </Page>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<>...</>}>
                  <Page title="About">
                    <About />
                  </Page>
                </Suspense>
              }
            />
            <Route
              path="workshop"
              element={
                <Suspense fallback={<>...</>}>
                  <Page title="Events & Workshop">
                    <Workshop />
                  </Page>
                </Suspense>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        {/* Footer */}
        <Footer marginTop="35px">

        </Footer>
      </Flex>
    </>
  );
}
