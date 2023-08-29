import React, { lazy, Suspense } from 'react';
import { CSSReset, Flex } from '@chakra-ui/react';
import { Link as RouteLink, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';
import PageNotFound from './PageNotFound';
import Page from './Page';

import Home from '../home/Home';
const Directory = lazy(() => import('../directory/Directory'));
const Results = lazy(() => import('../directory/Results'));
const About = lazy(() => import('../about/About'));
const Business = lazy(() => import('../directory/Business.js'));
const Newsletter = lazy(() => import('../newsletter/Newsletter'));

export default function App() {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bg="background">
        <header>
          <CSSReset />
          Logo
        </header>

        <Navigation>
          <RouteLink to="/">Home</RouteLink>
          <RouteLink to="/about">About Us</RouteLink>
          <RouteLink to="/Business">Business</RouteLink>
          <RouteLink to="/directory">Directory</RouteLink>
          <RouteLink to="/results">Results</RouteLink>
          <RouteLink to="/newsletter">Newsletter</RouteLink>
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
              path="Business"
              element={
                <Suspense fallback={<>...</>}>
                  <Page title="Business Profile Page">
                    <Business />
                  </Page>
                </Suspense>
              }
            />
            <Route
              path="directory"
              element={
                <Suspense fallback={<>...</>}>
                  <Page title="Directory">
                    <Directory />
                  </Page>
                </Suspense>
              }
            />
            <Route
              path="results"
              element={
                <Suspense fallback={<>...</>}>
                  <Page title="Results">
                    <Results />
                  </Page>
                </Suspense>
              }
            />
            <Route
              path="newsletter"
              element={
                <Suspense fallback={<>...</>}>
                  <Page title="Newsletter">
                    <Newsletter />
                  </Page>
                </Suspense>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Flex>
    </>
  );
}
