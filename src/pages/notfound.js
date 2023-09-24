import { Divbody, Text } from "../styled.styled"


function NotFound() {
    return (
        <Divbody>
            <Text 
            fontSize = "100" 
            font-weight ="bold" 
            fontColor="white" 
            backgroundColor="gray" 
            marginText ="0 auto" 
            >404*</Text>
            <Text 
            fontSize = "125" 
            font-weight ="bold" 
            fontColor="white" 
            backgroundColor="gray" 
            marginText ="0 auto" 
            >"_"</Text>
            <Text 
            fontSize = "100" 
            font-weight ="bold" 
            fontColor="white" 
            backgroundColor="gray" 
            marginText ="0 auto" 
            >Not Found</Text>
        </Divbody>
        
    )
}


export default NotFound