import React from 'react';
import { Box, Heading, Flex, Text, Image, Progress, Divider, Button, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Spacer } from '@chakra-ui/react';
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'
import VideoEmbed from './VideoEmbed';
import "./VideoEmbedStyles.css";

export default function SingleClassMain() {
    const classContent = {
        classTitle: "Here's some words",
        classDescription: "Here's a description! Yay! Nullam id risus vel libero blandit tempus quis at eros. Etiam elit eros, molestie sit amet accumsan ut, gravida sodales lorem.",
        classDatePublished: "February 1st, 2022",
        classPublisher: "Fem Entity",
        videoEmbedLink: "6VB4bgiB0yA",
        classBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id risus vel libero blandit tempus quis at eros. Etiam elit eros, molestie sit amet accumsan ut, gravida sodales lorem. Nam consequat massa sed nibh hendrerit, quis tincidunt dui gravida. Fusce efficitur diam non tellus commodo, in tincidunt neque placerat. Fusce interdum, mi ac gravida viverra, massa sapien aliquam risus, et maximus felis quam vel eros. Vivamus non mattis leo, ac cursus libero. Integer eu ligula ac purus interdum aliquet.",
        quizResult: "100%"
    }

    const recommendedClass = {
        recClassTitle: "Title Example",
        recClassImage: "https://bit.ly/2Z4KKcF",
        recClassURL: "google.com"
    }

    const SinglePageLayout = () => {
        return (
            <Flex>
          <Box
            as="SingleClassMain"
            fontColor="fontColor"
            flex="0.75"
            align="left"
            pl="5"
            pr="5"
            pb="10"
            bg="white">
            <Box rounded="lg" 
                bg="white"
                p="5">
                <Box>
                    <Heading mb="4" fontFamily="heading">{classContent.classTitle}</Heading>
                </Box>
                <Box mt="1" >
                    <Text fontFamily="subheading" fontSize="xl">{classContent.classDescription}</Text>
                </Box>
                <Box d="flex" alignItems="center" fontFamily="body" fontSize="xs" mt='2'>
                    <Text>{classContent.classPublisher}</Text>
                    <Text ml="4">{classContent.classDatePublished}</Text>
                </Box>
            </Box>
            <Box pl="5" pr="5" mb="10">
                <Box pt="10">
                    <VideoEmbed embedId={classContent.videoEmbedLink}/>
                </Box>
                <Box w="100%" mt="5"> 
                    <Heading as="h3" size="l">Here's a subheading</Heading>
                    <Text fontFamily="body">{classContent.classBodyText}</Text>
                </Box>
            </Box>

            

            <Box
                as="ExampleAccordion" pt="10">
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Section 3 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
            </Box>
          </Box>


        <Box
            as="SingleClassSidebar"
            bg="background"
            dropShadow="2xl"
            flex="0.25"
            flexDirection="flex-end"
            >
            
            <Box ml="4" mr="2">
                <Text>Progress</Text>
                <Progress colorScheme='green' height='32px' value={50} />
            </Box>

            <Box mr="2" ml="4" pt="6">
                <Text>Quiz Results:</Text> 
                <Text fontWeight="bold" mt="2">Quiz 1: {classContent.quizResult}</Text>
            </Box>

            <Divider m="5" ml="4" />

            <Box ml="4" mr="2">
                <Text pb="4">Similar Classes:</Text>
                <Box maxW="small" bg="white" overflow='hidden'>
                    <Image src={recommendedClass.recClassImage} />
                    <Box p="3" flex="1" textAlign="center">
                        <Text  mt='1' fontWeight='semibold' lineHeight='tight' isTruncated>{recommendedClass.recClassTitle}</Text>
                    </Box>
                </Box>
                <Box maxW="small" bg="white" overflow='hidden' mt="2">
                    <Image src={recommendedClass.recClassImage} />
                    <Box p="3" flex="1" textAlign="center">
                        <Text  mt='1' fontWeight='semibold' lineHeight='tight' isTruncated>{recommendedClass.recClassTitle}</Text>
                    </Box>
                </Box>
                <Box maxW="small" bg="white" overflow='hidden' mt="2">
                    <Image src={recommendedClass.recClassImage} />
                    <Box p="3" flex="1" textAlign="center">
                        <Text  mt='1' fontWeight='semibold' lineHeight='tight' isTruncated>{recommendedClass.recClassTitle}</Text>
                    </Box>
                </Box>
            </Box>
            <Box ml="4" mr="2">
                <Button variant="ghost" mt="2" flex="1">All Classes</Button>
            </Box>

            <Divider m="5" ml="4" />

            <Box ml="4" mr="2">  
                <Text pb="3">Related Vendors:</Text>
                <UnorderedList mr="4" ml="4" >
                    <ListItem>Vendor 1</ListItem>
                    <ListItem>Vendor 2</ListItem>
                    <ListItem>Vendor 3</ListItem>
                    <ListItem>Vendor 4</ListItem>
                </UnorderedList>
            </Box>

        </Box>

    </Flex>
    );
}
    
    return (SinglePageLayout());
}