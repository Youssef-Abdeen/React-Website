import React from 'react';
import { Link, Button } from '@chakra-ui/react';
import PropTypes from "prop-types";


const ActionBtn = ({linkAddress, btnTitle}) => (
    <Link href={linkAddress} target={'_blank'} marginTop={'2em'} color={ '#B97375 ' } _hover={'#B97375 '} width={'90%'}>
        <Button  className='cta-btn' minHeight={'70px'} width={'100%'} bg={'#B97375 '} color={'white'} _hover={'#B97375 '} height={'min-content'} fontSize={'3xl'} fontWeight={400} fontFamily={'heading'} whiteSpace={'normal'}>
            {btnTitle}
        </Button>
    </Link>
);

/* 
linkAddress - navigation address for button
btnTitle - text on the button
*/

ActionBtn.prototype = {
    linkAddress: PropTypes.string,
    btnTitle: PropTypes.string
};

export default ActionBtn;
