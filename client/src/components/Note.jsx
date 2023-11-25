import {
    Button,
    Card,
    CardBody,
    Flex,
    Heading,
    Input,
    Text,
    Textarea,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
  import { useDispatch } from "react-redux";
  import { deleteNotes, updateNotes } from ".././Redux/notes/note.actions";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import { useRef, useState } from "react";
  
  export default function NoteCard({ title, body, user, _id }) {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [tempTitle, setTitle] = useState(title);
    const [tempBody, setBody] = useState(body);
  
    const updateNote =()=>{
  
      dispatch(updateNotes(_id,{title:tempTitle,body:tempBody}))
      onClose()
  
    }

    const noteStyle={
      position:"relative",
      width:"80%",
      height:"300px",
      padding:"1%",
      margin:"1%",
      boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      backgroundColor:"#FFFBF5"
  }

    const titleStyle={
      textAlign:"center",
      fontSize:"20px",
      fontWeight:"bold",
      width:"80%"
  }

  const bodyStyle={
      fontSize:"18px",
      margin:"2%",
      textAlign:"justify",
      width:"80%"
  }

  const btngroupStyle={
    position:"absolute",
    bottom:"10%"
  }


  const btnStyle={
      backgroundColor:"#6C00FF",
      color:"white"
  }
  
    return (
      <Card style={noteStyle}>
        <CardBody>
          <VStack>
            <Heading style={titleStyle} >{title}</Heading>
            <Text style={bodyStyle} >{body}</Text>
  
            <Flex gap={7} style={btngroupStyle} >
              <>
                <Button style={btnStyle} onClick={onOpen}>Update</Button>
  
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Update Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <Input
                        value={tempTitle}
                        m
                        placeholder="Please enter title"
                        onChange={(e) => setTitle(e.target.value)}
                      ></Input>
                      <Textarea
                        mt={8}
                        value={tempBody}
                        placeholder={"Please enter description"}
                        onChange={(e) => setBody(e.target.value)}
                      ></Textarea>
                    </ModalBody>
  
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={updateNote}>
                        Update
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
              <Button
              style={btnStyle}
                onClick={() => {
                  dispatch(deleteNotes(_id));
                }}
              >
                Delete
              </Button>
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    );
  }