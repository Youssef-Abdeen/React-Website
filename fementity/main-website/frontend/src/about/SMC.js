import React from 'react';
import { Link, Image} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ins from './ins.jpg';
import facebook from './img/facebook.png';
import youtube from './img/youtube.jpg';
import twitter from './img/twitter.png';
import spotify from './img/spotify.png';

const imageClick = () => {
    console.log('click');
}
    return (
        <div>
            <Image 
                src={facebook} 
                onClick = {()=>imageClick()}  
                alt="facebook_log"
            />
        </div>
    )