import { Stack, Text } from '@chakra-ui/react';

import React from 'react';

export default function Workshop() {
    return (
        <>
            <Stack layerStyle="pageLayout"
                alignItems="center"
                flexWrap="wrap"
                px={4}
            >
                <Text fontSize={'5xl'} paddingBottom="10px" fontWeight={700}>Events & Workshop</Text>

                <Text fontSize={'2xl'} paddingTop="10px" fontWeight={700}>Calendar</Text>
                <Text fontSize={'2xl'} paddingTop="10px" fontWeight={700}>Contact Form</Text>
            </Stack>
        </>
    )
};