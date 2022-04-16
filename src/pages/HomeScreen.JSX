import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <Flex
      width={"100%"}
      border="1px solid red"
    >
      <Container
        border={"1px solid red"}
        maxW="container.lg"
      >
        <Box>
          <Text 
            className='fontsforweb_gothic'
            fontWeight="bold"
            fontSize="20px"
          >
            Saint Pactrick
          </Text>
        </Box>

        <Box>Menu</Box>
      </Container>
    </Flex>
    
  )
}

export default HomeScreen;