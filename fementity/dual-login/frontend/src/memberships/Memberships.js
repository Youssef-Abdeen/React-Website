import React from 'react';
import {Link as RouteLink, Link } from 'react-router-dom';
import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { ChevronRightIcon, CheckIcon, MinusIcon } from "@chakra-ui/icons";
import Collapsible from 'react-collapsible';

export default function Memberships(){

    return(
        <Box>
            <HStack mb={'10'} alignItems={['flex-start', 'normal']}  justify={'space-between'}>
                
                {/* Basic */}
                <Box
                    w={['25%']}
                    boxShadow="lg"
                    p={['4', '8']}
                    rounded="lg"
                    bg="background"
                    mx={'auto'}
                >
                    <Heading fontFamily={'subheading'} align={'center'}>Basic</Heading>
                    <Text align={'center'}>Free</Text>
                    <br></br>
                    
                    <RouteLink to="/member-form-free?member=basic">
                        <Button
                            component={Link} to="../member-form/MemberForm"
                            backgroundColor={'primary'}
                            color={'white'}
                            w={['full']}
                            aria-label="member-form free"
                        >
                            Get Started
                            <ChevronRightIcon/>
                        </Button>
                    </RouteLink>
                
                    <VStack spacing={'3'} mt={'40px'} align={['flex-start', 'left']} w="full">
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> View the Directory</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> View the workshops available</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Regular entry fee for workshops</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <MinusIcon color={'red.600'}/>
                            <Text> Princess Membership</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <MinusIcon color={'red.600'}/>
                            <Text> Queen Membership</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <MinusIcon color={'red.600'}/>
                            <Text> Empress Membership</Text>
                        </HStack>
                        <Collapsible trigger="See more ->">
                            <p>
                                More information to be added later.
                            </p>
                        </Collapsible>
                    </VStack>
                </Box>

                {/* Princess */}
                <Box
                    w={['25%']}
                    boxShadow="lg"
                    p={['4', '8']}
                    rounded="lg"
                    bg="background"
                    mx={'auto'}
                >
                    <Heading fontFamily={'subheading'} align={'center'}>Princess</Heading>
                    <Text align={'center'} fontWeight={'bold'}>$5.99/mo</Text>
                    <br></br>
                    
                    <RouteLink to="/member-form?member=princess">
                        <Button
                            component={Link} to="../member-form/MemberForm"
                            backgroundColor={'primary'}
                            color={'white'}
                            w={['full']}
                            aria-label="member-form paid"
                        >
                            Get Started
                            <ChevronRightIcon/>
                        </Button>
                    </RouteLink>

                    <VStack spacing={'3'} mt={'40px'} align={['flex-start', 'left']} w="full">
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Complimentary 30 minute consultation </Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Personalized Astrology profile </Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> 2 Fem Entity courses</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Monthly affirmations </Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Access to activity sheets</Text>    
                        </HStack>
                        <Collapsible trigger="See more ->">
                            <p>
                                More information to be added later.
                            </p>
                        </Collapsible>
                    </VStack>
                </Box>

                {/* Queen */}
                <Box
                    w={['25%']}
                    boxShadow="lg"
                    p={['4', '8']}
                    rounded="lg"
                    bg="background"
                    mx={'auto'}
                >
                    <Heading fontFamily={'subheading'} align={'center'}>Queen</Heading>
                    <Text align={'center'} fontWeight={'bold'}>$10.99/mo</Text>
                    <br></br>
                    
                    <RouteLink to="/member-form?member=queen">
                        <Button
                            component={Link} to="../member-form/MemberForm"
                            backgroundColor={'primary'}
                            color={'white'}
                            w={['full']}
                            aria-label="member-form paid"
                        >
                            Get Started
                            <ChevronRightIcon/>
                        </Button>
                    </RouteLink>

                    <VStack spacing={'3'} mt={'40px'} align={['flex-start', 'left']} w="full">
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Princess Membership</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> FREE "Find your Movement" class</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> 4 Fem Entity courses</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Exclusive promo codes for fitness studios</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Access to workshops and events</Text>    
                        </HStack>
                        <Collapsible trigger="See more ->">
                            <p>
                                More information to be added later.
                            </p>
                        </Collapsible>
                    </VStack>
                </Box>


                {/* Empress */}
                <Box    
                    w={['25%']}
                    boxShadow="lg"
                    p={['4', '8']}
                    rounded="lg"
                    bg="background"
                    mx="auto"
                    /*outline={"2px solid lightgreen"}*/
                >
                    <Heading fontFamily={'subheading'} align={'center'}>Empress</Heading>
                    <Text align={'center'}>$15.99/mo</Text>
                    <br></br>
                    
                    <RouteLink to="/member-form?member=empress">
                        <Button
                            component={Link} to="../member-form/MemberForm"
                            backgroundColor={'primary'}
                            color={'white'}
                            w={['full']}
                            aria-label="member-form free"
                        >
                            Get Started
                            <ChevronRightIcon/>
                        </Button>
                    </RouteLink>
                    

                    <VStack spacing={'3'} mt={'40px'} align={['flex-start', 'left']} w="full">
                    <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Queen Membership</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Unlimited Access to Fem Entity Intro Courses</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> 50% off selected Fem Entity events</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Early registration to workshops and events</Text>    
                        </HStack>
                        <HStack alignItems={['flex-start', 'left']} w={'full'}>
                            <CheckIcon color={'accent2'}/>
                            <Text> Monthly LIVE Group calls</Text>    
                        </HStack>
                        <Collapsible trigger="See more ->">
                            <p>
                                More information to be added later.
                            </p>
                        </Collapsible>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}
