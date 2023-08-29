import React, { lazy} from 'react';             /*define prop from reat for linking */
import about from './img/mukisa_irene.jpg';
import irene from './img/irene.jpg';
import mukisa from './img/mukisa.jpg'; 
import ins from './img/ins.jpg';
import facebook from './img/facebook.png';
import youtube from './img/youtube.jpg';
import twitter from './img/twitter.png';
import spotify from './img/spotify.png';
import RighTop from './img/RighTop.png';
import {Link, Badge, Stack, Text, Box, Image, Wrap, Button} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ContactForm from './ContactForm'
import { Link as RouteLink, Routes, Route } from 'react-router-dom';
import OurFounders from './OurFounders';


const Memberships = lazy(() => import('../memberships/Memberships'));  /*Creating route to membership page */

export default function About() {
  return (
  <>
  {/* whole page section */}
  <Stack 
    layerStyle="pageLayout" alignItems="center" flexWrap="wrap" spacing={15}
  >
  {/*Right top corner logo*/}
    
      <a href='https://business.halifaxchamber.com/members/member/fem-entity-180230' target={'_blank'} width={'50px'} padding={'5px 5px'}>
        <Image 
              src={RighTop}
              
              alt="RighTop_pic" 
              style={{
                position: 'absolute',
                marginLeft: 420,
                boxSize: "90px",
                width: 220, 
                height: 100,
            }}
        />
       </a> 
    
    {/*The end of Logo*/}

    {/* About page header section */}
    <Text 
      fontSize={'7xl'} 
      fontWeight={100} 
      paddingBottom={'10'}
      paddingTop={'5'} 
      color='#B97375'>
      About Us
    </Text>

     <Stack layerStyle="pageLayout" direction={'row'} spacing={'20'}  align={'left'} >
        <Image 
          src={about}
          objectFit="cover"
          boxSize="640px" 
          alt="about_us_pic"
        />
      {/* End About page header section */}
      
      {/* Company bio */}
        <Text 
          fontSize={27}
          fontWeight={300}
          textAlign={'center'}
          fontFamily={'heading'}
          paddingTop={'3'}
          > 
          Fem Entity is the source for self care, empowerment and community.
          Through our Diverse Directory Community, we collaborate
          to bring you a range of creative events, experiences, workshops and 
          course around embracing yourself. 
          We’ve created the yoni portal to be the source for divine thinking and self actualization,
          allowing clients to keep track of their progress,understanding themselves 
          and their journey.
        </Text>

    </Stack>
    {/* End Company bio section */}

    {/*Misson section*/}
    <Text 
      fontSize={'7xl'} 
      fontWeight={100} 
      color='#B97375'
      paddingTop={20}>
      MISSION
    </Text>

    <Text 
          fontSize={'36'}
          fontWeight={200}
          textAlign={'center'}
          fontFamily={'heading'}
          paddingBottom={10}>
          Fem Entity is devoted to providing reputable knowledge and impactful experiences in understanding and appreciating the inner self
    </Text>

{/*Creating Route link to memberships page*/}
  <RouteLink to="/memberships">
   <Button>
      <Text 
            fontSize={'6xl'}
            fontWeight={300}
            textAlign={'center'}
            fontFamily={'heading'}
            color={'white'}
            backgroundColor={'#B97375'}>
            CHECK OUT OUR MEMBERSHIPS
      </Text>
    </Button> 
  </RouteLink>
    {/*End Misson section*/}

      {/*section for member pics and bios */}
          <OurFounders irene={irene} mukisa={mukisa}/>
   
      {/*end section for member pics and bios */}

      {/* Social media sections*/}
      <Text 
        fontSize={'6xl'} 
        fontWeight={100} 
        paddingTop="15px" 
        color='#B97375'>
        FOLLOW OUR SOCIALS
      </Text>

      {/*ins*/}
    <Stack 
      direction="row" 
      spacing={6} 
      justifyContent="center">

        {/*facebook*/}
    <Link href='https://www.facebook.com/watch/Fem.Entity/' target={'_blank'} width={'100px'} padding={'5px 10px'} >
      <Image 
        src={facebook} 
        height="100%" 
        width={'100%'} 
        alt="facebook_log"
      />
    </Link> 
      {/*ins*/}
    <Link href='https://www.instagram.com/fem.entity/' target={'_blank'} width={'100px'} padding={'5px 10px'}>
      <Image 
        src={ins}  
        width="100%" 
        height="100%" 
        alt="instgram_log"
      />
    </Link>
     
      {/*youtube*/}
    <Link href='https://www.youtube.com/channel/UClZRJbfWGUfWc3D-cLGPmyw/featured' target={'_blank'} width={'100px'} padding={'5px 10px'}>
      <Image 
        src={youtube} width="100%" height="100%"  alt="youtube_log"
      />
    </Link>

      {/*twitter*/}
    <Link href='https://www.google.com/?hl=zh_CN' target={'_blank'} width={'100px'} padding={'5px 10px'}>
      <Image 
        src={twitter} width="100%" height="100%"  alt="twitter_log"
      />
    </Link>
      {/*spotify*/}
    <Link href='https://open.spotify.com/show/0NmgwwvVQLiEkMJsyZojz9?si=c0b3843d9dec4e41' target={'_blank'} width={'100px'} padding={'5px 10px'}>
      <Image 
        src={spotify} width="100%" height="100%" alt="spotify_log"
      />
    </Link>
</Stack>
   

      {/*Contact Us Form*/} 
      <Text fontSize={'6xl'} fontWeight={100} color='#B97375'>CONTACT US</Text>
      <ContactForm />

    </Stack>
    
  
    {/* end about page content  */}
  </>
  );
}


