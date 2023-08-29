import React, { lazy, Suspense } from 'react';
import { CSSReset, Flex } from '@chakra-ui/react';
import { Link as RouteLink, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';
import PageNotFound from './PageNotFound';
import Page from './Page';

import Home from '../home/Home';

import StorefrontPage from '../storefront/StorefrontPage';

const About = lazy(() => import('../about/About'));

export default function App() {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bg="background">
        <header>
          <CSSReset />
          hello from the header
        </header>

        <Navigation>
          <RouteLink to="/">Home</RouteLink>
          <RouteLink to="/about">About</RouteLink>

          <RouteLink to="/storefront">Storefront</RouteLink>

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

              path="storefront"
              element={
                <Page title="Storefront">
                  <StorefrontPage />
                </Page>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Flex>
    </>
  );
}
