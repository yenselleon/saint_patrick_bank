import { background, Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, Text, Link } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';

const LoginScreen = () => {

  const initialValues = {
    numberCardInputs: [
      {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      }
    ],
    numberCVV: ''
  };

  return (
    <HStack
      minHeight={"100vh"}
      spacing='0px'
    >
      {/* left panel */}
      <Box
        sx={{
          width: "50%",
          minHeight: "100vh",
          backgroundImage: "src/images/imageLogin.png",
          margin: "0px",
          backgroundClip: "padding-box",
        }}
      >

      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          width: "50%",
          minHeight: "100vh",
          margin: "0px",
          /*  background: "blue" */
        }}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        background={"#E6ECEC"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
        >

          <Box>
            <img src="src/images/logoSaintPatrick.png" alt="logo saint patrick" />
          </Box>
          <Text
            className='fontsforweb_gothic'
            fontWeight="bold"
            fontSize="36px"
          >
            Saint Patrick
          </Text>

          {/* login form */}
          <Box>


            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {(props) => (

                /* comienzo del form */
                <Form>

                  {/* numero de tarjeta 4 inputs */}
                  <FieldArray name="numberCardInputs">
                    {({ insert, remove, push }) => (
                      <FormControl marginTop={"60px"}>
                        <FormLabel htmlFor='numberCardInputs' color={"rgba(0,0,0, 0.75)"}>Numero de la Tarjeta</FormLabel>
                        <HStack
                          maxWidth={"328px"}
                        >
                          {
                            props.values.numberCardInputs.length > 0 &&
                              Object.keys(props.values.numberCardInputs[0]).map((input, index) => (
                                <Box key={index} borderRadius="lg" border="2px solid #ABABAB">
                                  <Field name={`numberCardInputs.0.${input}`}>
                                    {({ field, form }) => (
                                        <Input {...field} id={input} placeholder={"1234"} type="number" background="white"/>
                                    )}
                                  </Field>
                                </Box>
                              ))
                          }

                        </HStack>

                      </FormControl>
                    )}
                  </FieldArray>

                  {/* numero de cvv */}
                  <FormControl marginTop={"32px"}>
                    <FormLabel htmlFor='numberCVV' color={"rgba(0,0,0, 0.75)"}>Pin de seguridad</FormLabel>
                    <Box borderRadius="lg" border="2px solid #ABABAB" w={"85px"}>
                      <Field name="numberCVV">
                          {({field, form})=> (
                            <Input {...field} id="numberCVV" placeholder={"CVV"} type="number" background="white"/>
                          )}
                      </Field>
                    </Box>
                  </FormControl>
                  
                  {/* boton submit form */}
                  <Button
                    mt={4}
                    backgroundColor="brand.primary.normal"
                    /* isLoading={props.isSubmitting} */
                    color="white"
                    type='submit'
                  >
                    Ingresar
                  </Button>
                </Form>
              )}
            </Formik>


            <Text marginTop={"16px"}>
              Si no tenés cuenta registrate <Link href='https://chakra-ui.com' isExternal color='teal.500'><Text as={"u"}>aqui</Text></Link>
            </Text>

          </Box>

        </Flex>
      </Box>
    </HStack >
  )
}

export default LoginScreen;