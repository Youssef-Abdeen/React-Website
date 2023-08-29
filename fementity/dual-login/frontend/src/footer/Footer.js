//References: https://reactgo.com/react-sticky-footer/
import React from "react";
import {
    HStack, Text
} from '@chakra-ui/react';
var style = {
    backgroundColor: "#8F9DB7",
    borderTop: "1px solid #8F9DB7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const Footer = () => (
    <div className="footer" style={style}>
        <HStack>
            <Text style={style}>Terms of use &nbsp;| &nbsp;Privacy Policy &nbsp;|&nbsp; Help</Text>
        </HStack>
    </div>
);
export default Footer;
