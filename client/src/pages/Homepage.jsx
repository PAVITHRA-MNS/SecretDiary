
import { Box} from "@chakra-ui/react"
import Home from "../components/Home";


export default function Homepage(){

    const diaryimgstyle = {
        position:"absolute",
        left:"35px",
        marginTop:"50px",
        border:"3px solid #6C00FF",
        boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
    }

    return(
        <Box>
            <img style={diaryimgstyle} alt="diary" src="https://www.creativefabrica.com/wp-content/uploads/2022/10/23/Flatlay-Background-Styled-Shot-Planner-Journal-Print-Samples-Aesthetic-Art-42931985-1.png"/>
            <Home />
        </Box>
    );
}