import React, { lazy, Suspense } from 'react';
import { CSSReset, Flex, Button, Image } from '@chakra-ui/react';
import { Link as RouteLink, Routes, Route } from 'react-router-dom';

import Home from '../home/Home';
import Navigation from './Navigation';
import Main from './Main';
import PageNotFound from './PageNotFound';
import Page from './Page';
import Footer from './Footer';
import { LoadingMessage } from './LoadingMessage';
import { UserAuthContextProvider } from '../context/UserAuthContext';

const Directory = lazy(() => import('../directory/Directory'));
const Results = lazy(() => import('../directory/Results'));
const About = lazy(() => import('../about/About'));
const Business = lazy(() => import('../directory/Business.js'));
const Newsletter = lazy(() => import('../newsletter/Newsletter'));
const Login = lazy(() => import('../login/Login'));
const ForgotPassword = lazy(() => import('../forgot-password/ForgotPassword'));
const MemberForm = lazy(() => import('../member-form/MemberForm'));
const MemberFormFree = lazy(() => import('../member-form-free/MemberFormFree'));
const Memberships = lazy(() => import('../memberships/Memberships'));
const BusinessForm = lazy(() => import('../business-form/BusinessForm'));
const MemberPage = lazy(() => import('../member-page/MemberPage'));
const BusinessPage = lazy(() => import('../business-page/BusinessPage'));
const ProtectedRoute = lazy(() => import('../protected-route/ProtectedRoute'));
// const Form = lazy(() => import('../admin-form/Form'));
 //const SingleClassMain = lazy(() =>
 // import('../single-class-view/SingleClassMain'),
// );
 const StorefrontPage = lazy(() => import('../storefront/StorefrontPage'));

//This part was created to change the font style and size
 const styles = {
  fontStyle: {
    fontFamily: "Versailles" //Standard font across the entire website
  },
  fontS: {
    fontWeight: "200"
  },
};

export default function App() {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bg="background" style={styles.fontStyle}>
        <UserAuthContextProvider>
          <header>
            <CSSReset />
            Logo
          </header>

          <Navigation
          
            marginTop="-35px"
            padding={{ sm: '0', md: '0', lg: '0', xl: '0' }}
          >
             <RouteLink to="/storefront"> {/* currently linked to the storefront page as a placeholder saying "Coming Soon!", will need to be updated to the proper calendar page pending its development */}
              <Button marginTop="50px" marginLeft={50} bg="background">
                <p style={styles.fontS}
                >CALENDAR</p>
              </Button>
            </RouteLink>
            <RouteLink to="/storefront">
              <Button marginTop="50px" marginLeft={50} bg="background">
                <p style={styles.fontS}
                >LVLUP BOUTIQUE</p>
              </Button>
            </RouteLink>
            <RouteLink to="/about">
              <Button marginTop="50px" marginLeft={50} bg="background">
                <p style={styles.fontS}
                >About Us</p>
              </Button>
            </RouteLink>
            <RouteLink to="/">
              <Image
                marginLeft={10}
                src="/images/New FemLogo.png"
                boxSize="200px"
              />
            </RouteLink>
            {/* Align these to the left side of the nav bar */}
            <RouteLink to="/directory">
              <Button marginTop="50px" marginLeft={50} bg="background">
                <p style={styles.fontS}>Directory</p>
              </Button>
            </RouteLink>
            <RouteLink to="/memberships">
              <Button marginTop="50px" marginLeft={50} bg="background">
                <p style={styles.fontS}>Memberships</p>
              </Button>
            </RouteLink>
            <RouteLink to="/login">
              <Button marginTop="50px" marginLeft={50} bg="background">
                <p style={styles.fontS}>Login</p>
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
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="About">
                      <About />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="Business"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Business Profile Page">
                      <Business />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="directory"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Directory">
                      <Directory />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="results"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Results">
                      <Results />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="newsletter"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Newsletter">
                      <Newsletter />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="memberships"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Plans and Pricing">
                      <Memberships />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="member-page"
                element={
                  <ProtectedRoute>
                    <Suspense fallback={<LoadingMessage />}>
                      <Page title="MemberPage">
                        <MemberPage />
                      </Page>
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="member-form"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="MemberForm">
                      <MemberForm />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="member-form-free"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="MemberForm">
                      <MemberFormFree />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="business-form"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="BusinessForm">
                      <BusinessForm />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="login"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Login">
                      <Login />
                    </Page>
                  </Suspense>
                }
              />

              <Route
                path="business-page"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="BusinessPage">
                      <BusinessPage />
                    </Page>
                  </Suspense>
                }
              />
              <Route
                path="forgot-password"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="ForgotPassword">
                      <ForgotPassword />
                    </Page>
                  </Suspense>
                }
              />
              { /*<Route
                path="single-class"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="SingleClassMain">
                      <SingleClassMain />
                    </Page>
                  </Suspense>
                }
              /> */ }
              { /*<Route
                path="admin-form"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Form">
                      <Form />
                    </Page>
                  </Suspense>
                }
              /> */}
              { <Route
                path="storefront"
                element={
                  <Suspense fallback={<LoadingMessage />}>
                    <Page title="Storefront">
                      <StorefrontPage />
                    </Page>
                  </Suspense>
                }
              /> }
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
          <Footer />
        </UserAuthContextProvider>
      </Flex>
    </>
  );
}
