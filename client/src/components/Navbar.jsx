
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    
    Center
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { LOGOUT } from '../Redux/users/user.types';
import { useDispatch, useSelector } from 'react-redux';
  
  

  
  export default function Navbar() {

    const nav=useNavigate();
    const dispatch=useDispatch()


  const {auth}=useSelector((state)=>state.userReducer)
    return (
      <>
        <Box bg={useColorModeValue('#6C00FF')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box onClick={()=>{nav("/")}} cursor={"pointer"} fontSize={'27px'} color={'white'} marginLeft={"10px"}>Diary</Box>
  
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button display={auth?"block":"none"} onClick={()=>{nav("/notes")}} bgColor={'#FFE15D'}>All Notes</Button>
                <Button display={auth?"none":"block"} onClick={()=>{nav("/signup")}} bgColor={'#FFE15D'}>Sign Up</Button>
                <Button display={auth?"none":"block"} onClick={()=>{nav("/login")}} bgColor={'#FFE15D'}>Login</Button>
                
  
                <Menu display={auth?"block":"none"}>
                  <MenuButton display={auth?"block":"none"}
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p><b>Secret Diary</b></p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem  >All Notes</MenuItem>
                    <MenuItem onClick={()=>{
                      dispatch({type:LOGOUT})
                      nav("/login")
                    }}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    )
  }