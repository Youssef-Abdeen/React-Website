import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Flex, Stack } from '@chakra-ui/react';

export default function Navigation({ children, ...props }) {
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
      borderBottomColor="primary"
      {...props}
    >
      <Stack
        layerStyle="pageLayout"
        isInline
        alignItems="center"
        flexWrap="wrap"
        spacing={{ md: -3, lg: -6}}
        px={0}
      >
        {React.Children.map(children, (child) => {
          if (child !== null) {
            return React.cloneElement(child, {
              as: ReactRouterLink,
            });
          }
        })}
      </Stack>
    </Flex>
  );
}
