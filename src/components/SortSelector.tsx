import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";


const SortSelector = () => {
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: Relevance
                <MenuList>
                    <MenuItem>Relevance</MenuItem>
                    <MenuItem>Date Addded</MenuItem>
                    <MenuItem>Name</MenuItem><
                    MenuItem>Release Date</MenuItem>
                    <MenuItem>Popularity</MenuItem>
                    <MenuItem>Average Rating</MenuItem>

                </MenuList>
            </MenuButton>
        </Menu>
    )
}

export default SortSelector