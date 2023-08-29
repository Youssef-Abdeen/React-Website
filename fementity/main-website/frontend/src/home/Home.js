import { Stack, Text } from '@chakra-ui/react';
import YoutubeEmbed from "./YoutubeEmbed.js";
import { InstagramEmbed } from 'react-social-media-embed';
import React from 'react';
import pic1 from './img/group_photo_3.jpg';
import pic2 from './img/group_photo_1.jpg';
import pic3 from './img/fementity3.jpg';
import pic4 from './img/fementity4.jpg';
import Iframe from 'react-iframe';
import CallToAction from './CallToAction.js';
import {Link as RouteLink, Routes, Route } from 'react-router-dom';





const ctaText1 = "The easiest way to stay connected to a community of empowerment and self care!"
const ctaText2 = "A community of businesses and consultants that value helping people find balance and empowerment!"
const ctaText3 = "Start your journey to Self Discovery with Fem Entity"
const ctaText4 = "Stay up to date with all our latest news!"






export default function Home() {
  return (
    <>
      <Stack layerStyle="pageLayout"
        alignItems="center"
        flexWrap="wrap"
        px={4}
      >
        {/* Start of heading */}
        <Text fontSize={'6xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>Fem Entity</Text>
        <Text color={'#B97375'} paddingBottom={'50px'} fontSize={'2xl'}>Your source for Self Care, Empowerment and Community</Text>
        {/* End of heading */}

        {/*Photo & CTA 1 and 2*/}
        <CallToAction imgSource={pic1} title={'Membership'} text={ctaText1} 
        direction={'row-reverse'} alt={'five people laughing'} 
        linkAddress= {"https://www.google.com/"} btnTitle={'Sign Up Today'}/>
        <CallToAction imgSource={pic2} title={'Directory'} text={ctaText2} direction={'row'} alt={'four people smiling and looking at camera'} linkAddress={'https://www.google.com/'} btnTitle={'Join the Community'}/>
       
        
        
        {/* temporary youtube video placeholder */}
        <YoutubeEmbed embedId="Zk3j_L-z4yo" marginBottom={'2em'} paddingBottom={'10px'}/>

        {/*Photo & CTA 3 and 4*/}
        <br></br>
        <CallToAction imgSource={pic3} text={ctaText3} direction={'row'} alt={'five people smiling at each other'} linkAddress={'https://www.google.com/'} btnTitle={'View Our Memberships'}/>
        <CallToAction imgSource={pic4} text={ctaText4} direction={'row-reverse'} alt={'five people smiling at each other'} linkAddress={'https://www.google.com/'} btnTitle={'Sign Up For Our Newsletter'}/>


        <Text fontSize={'xl'} paddingTop="10px" fontWeight={700}>Check out our playlist!</Text>
        {/* Spotify Playlist */}
        <Iframe url="https://open.spotify.com/embed/playlist/5t2iUE9lsk6OfCFAEuCrrB?utm_source=generator"
          width="73%"
          height="80"
          frameBorder={"0"}
          id="spotPlay"
          className="spotifyPlaylist"
          display="initial"
          position="relative"
        /> 

        {/*Instagram plug*/}
        <Text fontSize={'4xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'} paddingTop={'1em'}>Follow Us On Instagram</Text>
        <InstagramEmbed url="https://www.instagram.com/p/CUkXcA7rrfU/?hl=en" width={328}/>


      </Stack>
    </>
  )
};



