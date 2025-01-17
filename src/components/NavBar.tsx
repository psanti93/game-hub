import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput.tsx";


const NavBar = () => {
    return (
        // Hstack just puts everything in a row
        <HStack padding={'10px'}>
            <Image src={logo} boxSize={'60px'}/>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar