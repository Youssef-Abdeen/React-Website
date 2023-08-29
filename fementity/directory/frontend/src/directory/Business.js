import React, { useState } from 'react';

import FullCalendar from '@fullcalendar/react' // must go before plugins

import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import 'react-calendar/dist/Calendar.css';

import {
  Heading,
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  WrapItem,
  Image,
  VStack,
  Text,
  Wrap,
  Stack,
  useColorMode,
  Center,
  Circle,
} from '@chakra-ui/react';
import logo from './femLogo.png';

export default function Home() {
    const myWidth = useState(window.innerWidth);
    const [value, onChange] = useState(new Date());

    return (
        <>



            <Flex
                direction="column"
                minHeight="100vh"
                minWidth='-webkit-fill-available'
                bgColor={'background'}

            >
                <Stack bg={'background'} shadow="xl" borderColor={'primary'} borderWidth="2px" pb={'0px'}>
                    <Center pt={'3vh'}>
                        <Image marginLeft={10} src={logo} boxSize="200px"></Image>
                    </Center>

                    <Wrap spacing="25px" pl={'70%'} pt={'3vh'} pb={'0px'}>

                        <WrapItem >
                            <ul style={{ listStyle: 'none' }}>
                                <li >
                                    <Avatar
                                        size={'md'}
                                        src={'https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png'}

                                    />
                                </li>

                                <li >
                                    <Link href='https://www.linkedin.com/'>LinkedIn</Link>
                                </li>
                            </ul>

                        </WrapItem>
                        <WrapItem >
                            <ul style={{ listStyle: 'none' }}>
                                <li >
                                    <Avatar
                                        size={'md'}
                                        src={'https://openvisualfx.com/wp-content/uploads/2019/10/1509135364flat-facebook-logo-png-icon-circle.png'}

                                    />
                                </li>

                                <li >
                                    <Link href='https://www.facebook.com/'>FaceBook</Link>
                                </li>
                            </ul>
                        </WrapItem>
                        <WrapItem >
                            <ul style={{ listStyle: 'none' }}>
                                <li >
                                    <Avatar
                                        size={'md'}
                                        src={'https://thumbnail.imgbin.com/7/11/21/instagram-logo-icon-bN801b8t_t.jpg'}

                                    />
                                </li>

                                <li >
                                    <Link href='https://www.instagram.com/'>Instagram</Link>
                                </li>
                            </ul>



                        </WrapItem>
                        <WrapItem>


                            <ul style={{ listStyle: 'none' }}>
                                <li >
                                    <Avatar
                                        size={'md'}
                                        src={'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png'}

                                    />
                                </li>

                                <li >
                                    <Link href='https://www.instagram.com/'>Website</Link>
                                </li>
                            </ul>

                        </WrapItem>
                    </Wrap>

                    <Wrap pl={'5%'} pt={'0%'} pb={'0%'} style={{
                        width: '200px',
                        height: '100px',
                        backgroundColor: '#B97375',
                        borderTopLeftRadius: '150px ',
                        borderTopRightRadius: '150px',
                        transform: [{ scaleX: '3 ' }],
                        marginLeft: '15px',
                    }}>
                        <WrapItem pt={'35%'} >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} pt={'30%'} >
                                <Heading style={{ color: '#FDF8F1' }}>Fem <br></br></Heading>
                            </div>
                        </WrapItem>
                    </Wrap>

                </Stack>

                <div pl={'6%'} style={{
                    width: '200px',
                    height: '100px',
                    backgroundColor: '#B97375',
                    borderBlockStyle: "solid",
                    borderBottomLeftRadius: '150px',
                    borderBottomRightRadius: '150px',
                    transform: [{ scaleX: '3' }],
                    padding: '1px',
                    textAlign: 'center',
                    marginLeft: '15px',
                }}>
                    <Heading style={{ color: '#FDF8F1', textAlign: 'center', }}>Entity</Heading>
                </div>

                <Flex direction="row">
                    <Wrap spacing="4px" width={'100%'} justify="space-between" pb={'15%'}>
                        <WrapItem w={['100%', null, '35%']} h={'100%'} pt={'2vh'} pb={'1vh'}>
                            <Flex direction={'column'}>
                                <Stack w={'100%'} pl={'1vh'} pr={'1vh'} pt={'2vh'} pb={'1vh'} backgroundColor={'lightsteelblue'} >
                                    <Center><h2>Contact Us</h2></Center>
                                </Stack>
                                <Box w={'100%'} pl={'1vh'} pr={'1vh'} borderWidth="1px" shadow="xl">
                                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Box>
                                <Stack w={'100%'} pl={'1vh'} pr={'1vh'} pt={'2vh'} pb={'1vh'} backgroundColor={'lightsteelblue '}>
                                    <Center><h2>BookMeeting</h2></Center>
                                </Stack>
                                <Box w={'100%'} pl={'1vh'} pr={'1vh'} borderWidth="1px" shadow="xl">

                                    <div class="center">

                                        <h1>Calendar </h1>



                                        <FullCalendar

                                            plugins={[dayGridPlugin]}

                                            initialView="dayGridMonth"

                                            events={[

                                                { title: 'Test Event 1', date: '2022-04-09' },

                                                { title: 'Test Event 2', date: '2022-04-17' }

                                            ]}

                                        />
                                    </div>

                                </Box>
                            </Flex>


                        </WrapItem>

                        <WrapItem w={['100%', null, '35%']} pb={'1%'} pt={'1vh'}>
                            <Box w={'100%'} pl={'1vh'} pt={'1vh'}>
                                <Center><Heading>About Us</Heading></Center>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Box>
                        </WrapItem>

                        <WrapItem w={['100%', null, '23%']} pt={'4vh'} pb={'15%'}>
                            <Flex direction={'column'}>
                                <Stack w={'100%'} pt={'2vh'} pb={'1vh'} backgroundColor={'lightsteelblue'}>

                                    <Center><h2>Price Range</h2></Center>
                                    <Center><h2>of</h2></Center>
                                    <Center><h2>Product or Service</h2></Center>

                                </Stack>
                                <Box w={'100%'} pl={'1vh'} pr={'1vh'} borderWidth="1px" shadow="xl" height={'100%'}>
                                    <h>headers</h>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Box>
                            </Flex>
                        </WrapItem>
                    </Wrap>
                </Flex>

            </Flex>



        </>
    );
}
