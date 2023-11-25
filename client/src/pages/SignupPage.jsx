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
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/config";

export default function SignupPage(){
    const nav = useNavigate()
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [name,setName] =useState("")

    const handleSignup =async()=>{
        let data = await axios.post(BASE_URL+"/user/register",{
            name,email,password
        })
        let  {message,status} = data.data
        if(status===1){
            alert(message)
            nav("/login")
        }else{
            alert(message)
        }
    }
   

    return <Flex padding={4} w="100%" justifyContent="space-around" >

<Image w="30%" h="600px" margin="1%" src="https://www.creativefabrica.com/wp-content/uploads/2022/10/23/Flatlay-Background-Styled-Shot-Planner-Journal-Print-Samples-Aesthetic-Art-42931985-1.png"></Image>
        <VStack w={"50%"}>

            
        <Flex
      mt="3%"
      minH={'70vh'}
      padding="1%"
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up with Notes App</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to store your <Link color={'blue.400'}>thoughts</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input  value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
              onClick={handleSignup}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

        </VStack>
        
    </Flex>
}