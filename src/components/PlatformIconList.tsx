import {Platform} from "../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";
interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {

    // ea. platform object has the following name: Playstation slug: playstation (textual id)
    // here we want to map the slug (textual id) to each platform component icons that we imported above
   // [key: string] represents a index signature it takes care of the compilation error that we initially see when
    // we put platform.slug in as
    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
    }

    return(
        <HStack marginY={1}>
          {platforms.map((platform) =>
                <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}/>
          ) }
        </HStack>
    )
}

export default PlatformIconList;