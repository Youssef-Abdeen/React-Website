// import React from 'react';
// import { Heading } from '@chakra-ui/react';

// export default function About() {
//   return <Heading>About</Heading>;
// }
import React from 'react';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

export default function individualService() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <Stack spacing={2}>
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            //bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
          >
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'220px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Image
                rounded={'lg'}
                height={230}
                width={285}
                objectFit={'cover'}
                src={IMAGE}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text
                color={'gray.500'}
                fontSize={'sm'}
                textTransform={'uppercase'}
              >
                Fem Entity's
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Service
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                  $Current
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  $Original
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Button colorScheme="blue">Contact a consultant</Button>
      </Stack>
    </div>
  );
}
