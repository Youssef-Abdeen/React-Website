import React from "react";
import { useState } from "react";
import { Stack, Text, Box, Image, Wrap, background } from '@chakra-ui/react';


const OurFounders = ({ irene, mukisa}) => {

    const [isHovering, setIsHovering] = useState(false);

    //Event handler for mouse enter
    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    //Event handler for mouse leaving
    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    //React component for the founders photo's with hover text
    return (
        <Stack layerStyle="pageLayout" alignItems="center"  spacing={15} >
            <Text 
                fontSize={'6xl'} 
                fontWeight={100} 
                paddingTop="80px" 
                color='#B97375'
                >
                    OUR FOUNDERS
            </Text>
            

            <Wrap fontSize={'4xl'} paddingBottom="15px">
                {/* Irene Bio */}
                <Box maxW='md' maxH='xlg' borderRadius='md' overflow='hidden' align={'left'} paddingRight={10}>

                    <Text 
                    align={'center'} 
                    fontSize='4xl'
                    fontWeight={50} 
                    paddingBottom="10px"
                    color='#B97375'
                    >
                        IRENE
                    </Text>


                    <Box position={'relative'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image 
                        src={irene}  
                        paddingBottom="20px"
                        objectFit="cover"
                        alt="irene_pic"/>


                        <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            display: isHovering ? 'block' : 'none',
                            color: 'white',
                            backgroundColor: 'rgba(52, 52, 52, 0.8)'
                        }}>
                            <Text fontSize={20} textAlign={'center'} fontWeight={'light'}>
                                Hey Friends! My name is Irene Saliendra, I’m a Taurus and Aries cusp with a lot of love to give! Raised in Atlantic Canada with a filipino soul. I’ve always had a passion for building communities, working with start-ups and women empowerment. I’m an advocate for finding self-love through self care and am slowly finding my own passions in creativity. Through the study of energy work and balance, I have found a love for myself in a new light. My goal is to share what I’ve learned about the ancient techniques of energy work and mindfulness to help other people find their own inner power for success and happiness.  
                            </Text>
                        </div>
                    </Box> 
                </Box>

                {/* Mukisa Bio */}
                <Box maxW='md' maxH='xlg' borderRadius='md' overflow='hidden' align={'left'}  paddingLeft={10}>
                    <Text 
                        align={'center'} 
                        fontSize='4xl'
                        fontWeight={50} 
                        paddingBottom="10px"
                        color='#B97375'
                        >MUKISA
                    </Text>
                    <Box position={'relative'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        
                        <Image 
                        src={mukisa} 
                        paddingBottom="20px" 
                        objectFit="cover"
                        alt="mukisa_pic"/>
                        
                        <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            display: isHovering ? 'block' : 'none',
                            color: 'white',
                            backgroundColor: 'rgba(52, 52, 52, 0.8)'
                        }}>

                            <Text fontSize={19} textAlign={'center'} fontWeight={'light'}> 
                                Hello world, my name is Mukisa! I am a Pisces born and raised in Nova Scotia with roots in Uganda. I’m a lawyer in training passionate about human rights, women’s empowerment, and self-care. My goal is to create a supportive space, especially for those with layered identities, to embrace their feminine energy and build self-esteem. I grew up around ambitious, high achieving friends and family who often sacrifice their own health for “success”. I believe that to have a healthy mind, body and spirit, we have to find balance in our lives. Although I am career driven and academic, I also find joy in self care, yoga, fashion, makeup, and quality time with loved ones. I hope that through Fem Entity, we will help those from all backgrounds, gender identity, body shape, sexuality and culture people find the healthiest version of themselves.
                            </Text>
                        </div>
                    </Box>
                </Box>
                 
            </Wrap>
            <Text fontSize={'md'}>Hover over each photo for a brief statement from our two founders</Text>
        </Stack>
    )


};

export default OurFounders;