import React, {lazy, Suspense} from 'react';
import { CSSReset, Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from '../context/UserAuthContext';

import Main from './Main';
import PageNotFound from './PageNotFound';
import Page from './Page';

import Home from '../home/Home';
import Login from '../login/Login';
import ForgotPassword from '../forgot-password/ForgotPassword';
import MemberForm from "../member-form/MemberForm";
import MemberFormFree from '../member-form-free/MemberFormFree';
import Memberships from "../memberships/Memberships"
import BusinessForm from "../business-form/BusinessForm";
import MemberPage from "../member-page/MemberPage";
import BusinessPage from "../business-page/BusinessPage";
import Footer from '../footer/Footer';
import ProtectedRoute from '../protected-route/ProtectedRoute';
import Navbar from '../navbar/Navbar';

export default function App() {
    return (
    <>
      <Flex direction="column" minHeight="100vh" bg="background">
        <UserAuthContextProvider>
          <header>
            <CSSReset />
            Fem entity Dual Login
          </header>

          <Navbar/>

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
                  path="memberships"
                  element={
                    <Suspense fallback={<>...</>}>
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
                            <Suspense fallback={<>...</>}>
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
                    <Suspense fallback={<>...</>}>
                      <Page title="MemberForm">
                        <MemberForm />
                      </Page>
                    </Suspense>
                  }
              />
              <Route
                  path="member-form-free"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Page title="MemberForm">
                        <MemberFormFree />
                      </Page>
                    </Suspense>
                  }
              />
              <Route
                  path="business-form"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Page title="BusinessForm">
                        <BusinessForm />
                      </Page>
                    </Suspense>
                  }
              />
              <Route
                path="login"
                element={
                  <Suspense fallback={<>...</>}>
                    <Page title="Login">
                      <Login />
                    </Page>
                  </Suspense>
                }
              />

              <Route
                path="business-page"
                element={
                  <Suspense fallback={<>...</>}>
                    {' '}
                    <Page title="BusinessPage">
                      {' '}
                      <BusinessPage />{' '}
                    </Page>{' '}
                  </Suspense>
                }
              />

              <Route
                path="forgot-password"
                element={
                  <Suspense fallback={<>...</>}>
                    <Page title="ForgotPassword">
                      <ForgotPassword />
                    </Page>
                  </Suspense>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
          <Footer/>
        </UserAuthContextProvider>
      </Flex>
    </>
  );
}
