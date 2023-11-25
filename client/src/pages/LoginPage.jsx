import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import {
    
    FormControl,
    FormLabel,
    Input,
    
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Redux/users/user.actions";

export default function LoginPage(){
    const nav = useNavigate()
    const {auth,token} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
        nav("/notes")
    }

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const dispatch = useDispatch()

    const handleLogin =()=>{
        dispatch(getUser({email,password}))
    }

   
   

    return <Flex padding={4} w="100%" gap="10%" justifyContent="space-around">

        <Image w="30%" h="600px" margin="1%" src="https://www.creativefabrica.com/wp-content/uploads/2022/10/23/Flatlay-Background-Styled-Shot-Planner-Journal-Print-Samples-Aesthetic-Art-42931985-1.png"></Image>
        <VStack w={"50%"}>

            
        <Flex
      mt="7%"
      padding="1%"
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to view your <Link color={'blue.400'}>collection</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              
              <Button
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

        </VStack>
        
    </Flex>
}