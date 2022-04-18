import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <Flex
      width={"100%"}
      /* border="1px solid red" */
    >
      <Container
        /* border={"1px solid red"} */
        maxW="container.lg"
        >
        {/* Navbar */}
        <Flex
          justifyContent="space-between"
          padding={"25px 0px"}
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

          <HStack
            className='fontsforweb_gothic'
            fontWeight="bold"
            fontSize="14px"
            spacing={"51px"}
          >
            <Text cursor={"pointer"}>
              Empresas
            </Text>
            <Text cursor={"pointer"}>
              Personas
            </Text>
            <Text cursor={"pointer"}>
              Beneficios
            </Text>
            <Box
              borderRadius="25px" 
              border="2px solid black"
              padding="0.4rem 1.2rem"
              textAlign={"center"}
              cursor="pointer"
              _hover={{
                background: "black",
                color: "white"
              }}
            >
              <Text
                textAlign={"center"}
                marginLeft="1px"
              >
                Registrarse
              </Text>
            </Box>
          </HStack>

        </Flex>
        {/* Fin Navbar */}

        {/* Header */}
        <Flex
          marginTop={"100px"}
        >
          {/* left side header */}
          <Box
            width={"45%"}
            paddingTop={"10px"}
          >
            <Text
              fontSize={"62px"}
              fontWeight="bold"
              className='fontsforweb_gothic'
              textAlign={"initial"}
              marginBottom="60px"
              lineHeight={"shorter"}
            >
              Lorem ipsum dolor sit amet
            </Text>

            <Text
              fontSize={"28px"}
              className='fontsforweb_gothic'
              textAlign={"initial"}
              marginBottom="40px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan donec congue in quis a, amet.
            </Text>

            <Box
              borderRadius="25px" 
              border="2px solid black"
              padding="0.4rem 1.2rem"
              width={"140px"}
              textAlign={"center"}
              cursor="pointer"
              _hover={{
                background: "black",
                color: "white"
              }}
            >
              Ingresar
            </Box>
          </Box>

          {/* right side header */}
          <Box
            width={"55%"}
            background="gray"
            height={"589px"}
            borderRadius="md"
          >

          </Box>

          

        </Flex>

      </Container>

      
    </Flex>
    
  )
}

export default HomeScreen;