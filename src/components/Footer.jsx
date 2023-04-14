import React from 'react'
import { Box, Image, Text, Flex, List, ListItem } from "@chakra-ui/react";
import Logo from "../images/Logo.png"
import "./Footer.css"
import face from "../images/face.png"
import insta from "../images/insta.png"
import twitter from "../images/twitter.png"
// const Footer = () => {
//   return (
//     <div  className=" bg">
//         <img src={Logo} alt="Logo" className='logo2' />
//         <div className='contact'>
//             <p className='heading'>
//                 Contact Us
//             </p>
//             <p className='w'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
//             <p className='mt'>example2020@gmail.com</p>
//             <p className='mt'>(904) 443-0343</p>
//         </div>
//         <div className='links '>

//         <p className='heading'>
//             More
//         </p>
//             <nav>
//                     <li>About Us</li>
//                     <li>Products</li>
//                     <li>Career</li>
//                     <li>Contact Us</li>
                
//             </nav>
//         </div>
//         <div className='socialLinks'>
//             <p className='heading social '>Social Links</p>
//             <p className='linked'>© 2022 Food Truck Example</p>
//             <div className='imgContainer '>
//                 <img src={face} alt="facebook" /><img src={insta} alt="instagram" /><img src={twitter} alt="twitter" />
//             </div>
//             <p className='linked2'> © 2022 Food Truck Example</p>
//         </div>
//     </div>
//   )
// }

// export default Footer
const Footer = () => {
    return (
      <Box fontFamily={'Source Sans Pro'} bg="rgba(248, 248, 248, 1)" px={6} py={12} color="rgba(100, 104, 116, 1)">
        <Flex justifyContent="space-between" alignItems="flex-start" mb={10}>
          <Image src={Logo} alt="Logo" className="logo2" />
          <Box flex={1} ml={10}>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              Contact Us
            </Text>
            <Text mb={2}>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </Text>
            <Text mb={2}>example2020@gmail.com</Text>
            <Text>(904) 443-0343</Text>
          </Box>
          <Box flex={1} ml={10}>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              More
            </Text>
            <List >
              <ListItem >About Us</ListItem>
              <ListItem>Products</ListItem>
              <ListItem>Career</ListItem>
              <ListItem>Contact Us</ListItem>
            </List>
          </Box>
          <Box flex={1} ml={10}>
            <Text fontSize="2xl" fontWeight="bold" mb={2} ml={-5} fontFamily={'Source Sans Pro'} >
              Social Links
            </Text>
            
            <Flex>
              
              <Box mr={4}>
                <Image src={insta} alt="instagram" />
              </Box>
              <Box mr={4}>
                <Image src={twitter} alt="twitter" />
              </Box>
              <Box mr={4}>
                <Image src={face} alt="facebook" />
              </Box>
            </Flex>
            <Text style={{marginTop:'27%' , marginLeft:'-35%'}}  > © 2022 Food Truck Example</Text>
          </Box>
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
  