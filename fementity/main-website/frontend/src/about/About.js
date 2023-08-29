import React from 'react';
import about from './mukisa_irene.jpg';
import irene from './irene.jpg';
import mukisa from './mukisa.jpg'; 
import ins from './ins.jpg';
import facebook from './facebook.png';
import youtube from './youtube.jpg';
import twitter from './twitter.png';
import spotify from './spotify.png';
import {Link, Badge, Stack, Text, Box, Image, Wrap} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ContactForm from './ContactForm'


export default function About() {
  return (
  <>
  {/* whole page section */}
  <Stack 
    layerStyle="pageLayout" alignItems="center" flexWrap="wrap" spacing={15}
  > 
    {/* About page header section */}
    <Text 
      fontSize={'7xl'} 
      fontWeight={100} 
      paddingBottom={'10'} 
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
          Fem Entity is the source for selfcare, empowerment and community.
          Through our Diverse DirectoryCommunity, we collaborate
          to bringyou a range of creative events,experiences, workshops and 
          coursesaround embracing yourself. 
          We’vecreated the yoni portal to be thesource for divine thinking and selfactualization,
          allowing clients tokeep track of their progress,understanding themselves 
          and theirjourney.
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
          Fem Entity is devoted to providing reputable knowledge and impactful experiences in understandingand appreciating the inner self
    </Text>

    <Text 
          fontSize={'6xl'}
          fontWeight={300}
          textAlign={'center'}
          fontFamily={'heading'}
          color={'white'}
          backgroundColor={'#B97375'}>
          CHECK OUT OUR MEMBERSHIPS
    </Text>
    {/*End Misson section*/}

      {/*section for member pics and bios */}
  <Stack layerStyle="pageLayout" alignItems="center"  spacing={15} >
    <Text 
        fontSize={'6xl'} 
        fontWeight={100} 
        paddingTop="80px" 
        color='#B97375'
        >OUR FOUNDERS
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
            >IRENE
          </Text>
              <Image 
                src={irene}  
                paddingBottom="20px"
                objectFit="cover"
                alt="irene_pic"
              />
              <Text fontSize={23} textAlign={'center'} fontWeight={'light'}>
                Hey Friends! My name is Irene Saliendra,I’m a Taurus and Aries cusp with a lotof love to give! Raised in AtlanticCanada with a filipino soul. I’ve alwayshad a passion for building communities,working with start-ups and womenempowerment. I’m an advocate forfinding self-love through self careand am slowly finding my own passionsin creativity. Through the study ofenergy work and balance, I have founda love for myself in a new light. Mygoal is to share what I’ve learnedabout the ancient techniques ofenergy work and mindfulness to helpother people find their own innerpower for success and happiness.  
              </Text> 
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
            <Image 
              src={mukisa} 
              paddingBottom="20px" 
              objectFit="cover"
              alt="mukisa_pic"/>
              <Text fontSize={23} textAlign={'center'} fontWeight={'light'}> 
                Hello world, my name is Mukisa! I am a Pisces born and raised in Nova Scotia with roots in Uganda. I’m a lawyer in training passionate about human rights, women’s empowerment, and self-care. My goal is to create a supportive space, especially for those with layered identities, to embrace their feminine energy and build self-esteem. I grew up around ambitious, high achieving friends and family who often sacrifice their own health for “success”. I believe that to have a healthy mind, body and spirit, we have to find balance in our lives. Although I am career driven and academic, I also find joy in self care, yoga, fashion, makeup, and quality time with loved ones. I hope that through Fem Entity, we will help those from all backgrounds, gender identity, body shape, sexuality and culture people find the healthiest version of themselves.
              </Text>
        </Box> 
      </Wrap>
    </Stack> 
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
    <Link href='https://open.spotify.com/playlist/5t2iUE9lsk6OfCFAEuCrrB?si=afee53d128e44828' target={'_blank'} width={'100px'} padding={'5px 10px'}>
      <Image 
        src={spotify} width="100%" height="100%" alt="spotify_log"
      />
    </Link>
</Stack>
   
  

      {/* Halifax Chamber of Commerce Badge with link to Fem Entity Listing 
      <Badge variant='subtle' colors="accent">
        <Link href='https://business.halifaxchamber.com/members/member/fem-entity-180230' isExternal>
          Halifax Chamber of Commerce <ExternalLinkIcon mx='2px' fontSize={'2xl'} />
        </Link>
      </Badge> */}

      {/* Contact Us Form */} 
      {/*No refreshing after submission due to inconsistent behaviours in email testing*/} 
      <Text fontSize={'6xl'} fontWeight={100} color='#B97375'>CONTACT US</Text>
      <ContactForm />

    </Stack> 
    {/* end about page content  */}
  </>
  );
}

