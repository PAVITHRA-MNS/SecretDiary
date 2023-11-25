
import { Flex ,Box, Button} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Home(){


    const {auth}=useSelector((state)=>state.userReducer)

    const homeStyle = {
        position:"absolute",
        right:"70px",
        marginTop:"60px",
        width:"55%",
        boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        padding:"2%"
    }

    const featuresStyle = {
        border:"2px solid #6C00FF",
        padding:"3%",
        margin:"1%",
        marginTop:"5%"
    }

    const nav=useNavigate();

    return (
        <div style={homeStyle}>
        <h3 style={{textAlign:"center",color:"#6C00FF",fontSize:"25px"}}><b>Your Secret Diary !!</b></h3>
        <br />
        <p>A secure and private diary app designed to be your personal sanctuary for thoughts, reflections, and memories. With an emphasis on privacy and user-friendly design, this app provides a discreet and encrypted space for you to pour out your heart.</p>
        <Flex justifyContent="center" gap={auth?"2%":"8%"}>
            <Box display={auth?"block":"none"} style={featuresStyle}>
                <h3 style={{textAlign:"center"}}><b>View All Notes</b></h3>
                <br /> 
                <p>Click this button to view all notes you have stored</p>
                <br />
                <Button onClick={()=>{nav("/notes")}} color={"white"} bgColor={"#6C00FF"}>All Notes</Button>
            </Box>
            <Box style={featuresStyle}>
            <h3 style={{textAlign:"center"}}><b>Sign Up</b></h3>
            <br /> 
                <p>Click this button to register your account</p>
                <br />
                <Button onClick={()=>{nav("/signup")}} color={"white"} bgColor={"#6C00FF"}>Sign Up</Button>
            </Box>
            <Box style={featuresStyle}>
            <h3 style={{textAlign:"center"}}><b>Login</b></h3>
            <br /> 
                <p>Click this button to login to your account</p>
                <br />
                <Button onClick={()=>{nav("/login")}} color={"white"} bgColor={"#6C00FF"}>Login</Button>
            </Box>
        </Flex>
        </div>
    );
}