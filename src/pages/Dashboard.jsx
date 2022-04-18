import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react'

const Dashboard = () => {
  return (
    <Flex>
      {/* left menu */}
      <Box
        width={"20%"}
        minHeight="100vh"
        /* border={"1px solid green"} */
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
      >
        {/* header left menu */}
        <HStack spacing={"3"}>
          <Box
            w={"32px"}
            h="43px"
            objectFit={"contain"}
          >
            <img src="src/images/logoSaintPatrick.png" alt="logo saint patrick"/>
          </Box>
          <Box>
            <Text
              className='fontsforweb_gothic'
              fontWeight="bold"
              fontSize="30px"
            >
              Saint Patrick
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* view selection */}
      <Box
        width={"80%"}
        minHeight="100%"
        /* border={"1px solid red"} */
        background="brand.primary.primary100"
      >

      </Box>
    </Flex>
  )
}

export default Dashboard;