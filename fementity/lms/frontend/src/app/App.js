import React, { lazy, Suspense } from 'react';
import { CSSReset, Flex } from '@chakra-ui/react';
import { Link as RouteLink, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';
import PageNotFound from './PageNotFound';
import Page from './Page';

import Home from '../home/Home';
import SingleClassMain from '../single-class-view/SingleClassMain'
const Form = lazy(() => import('../admin-form/Form'));


const About = lazy(() => import('../about/About'));
// const SingleClassMain = lazy(() => import('../single-class-view/SingleClassMain'));
const Form = lazy(() => import('../admin-form/Form'));

export default function App() {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bg="background">
        <header>
          <CSSReset />
          hello from the headers
        </header>

        <Navigation>
          <RouteLink to="/">Home</RouteLink>
          <RouteLink to="/about">About</RouteLink>
          <RouteLink to="/SingleClassMain">SingleClassMain</RouteLink>
          <RouteLink to="/admin-form">Form</RouteLink>
        </Navigation>
        <Suspense fallback={<div>Loading...</div>}>
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
                path="SingleClassMain"
                element={
                  <Page title="SingleClassMain">
                    <SingleClassMain />
                  </Page>
                }
                />
              <Route
                path="admin-form"
                element={
                  <Page title="Form">
                    <Form />
                  </Page>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Flex>
    </>
  );
}
