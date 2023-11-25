import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "../components/Note";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import { FiPlusCircle } from "react-icons/fi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function NotesPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.noteReducer);
  console.log(data);
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")

  useEffect(() => {
    dispatch(getNotes());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote =()=>{
    dispatch(createNotes({title,body}))
    onClose()
  }

  return (
    <Box mt={10} padding={8}>
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns="repeat(4 ,1fr)"
      >
        {notes?.map((el) => (
          <NoteCard {...el} />
        ))}
      </Grid>

      <>
      <IconButton onClick={onOpen} position="fixed" right="3%" bottom="5%" h="50px" w="50px" borderRadius="50px" color="white" backgroundColor="#6C00FF" fontSize="40px" icon={<FiPlusCircle />} />


      

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

                <Input value={title}m placeholder="Please enter title" onChange={(e)=>setTitle(e.target.value)}></Input>
                <Textarea mt={8} value={body} placeholder={'Please enter description'} onChange={(e)=>setBody(e.target.value)}></Textarea>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNote}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}
