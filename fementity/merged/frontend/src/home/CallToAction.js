import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Image, Box, Text, Heading } from '@chakra-ui/react';
import PropTypes from "prop-types";
import ActionBtn from './ActionBtn';


const CallToAction = ({ imgSource, title, text, direction, alt, linkAddress, btnTitle }) => (

    <Flex direction={direction} justify={'space-around'} gap={'20'} paddingBottom={'2em'}>
        <Box className={'cta-photo'}>
            <Image src={imgSource} objectFit='cover' height={'400px'} alt={alt}/>
        </Box>
        <Box display={'flex'} flexDirection={'column'} width={'400px'} className={'cta-title-and-text'} alignItems={'center'}>
            <Heading fontSize={'5xl'} fontWeight={500} align={'center'} paddingBottom={'3%'}>{title}</Heading>
            <Text fontSize={'3xl'} fontWeight={400} align={'center'}>{text}</Text>
            <ActionBtn linkAddress={linkAddress} btnTitle={btnTitle} />
        </Box>
    </Flex>
);


CallToAction.propTypes = {
    imgSource: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string,
    alt: PropTypes.string

};

/* 
img source - route pathing to photo file
title - Title of the CTA
text - content of the CTA
direction - determine the flex direction of the CTA (row vs. row-reverse)
alt - alt text for photo
linkAddress - navigation address for button
btnTitle - text on the button
*/


export default CallToAction;