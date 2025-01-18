import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";


interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {

    // We want to formulate the heading:
    // Games - default heading
    // Action Games - genre + games
    // Xbox Games - just the platform + games
    // Xbox Action Games - Platform, Genre and games

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return(
        <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
            {heading}
        </Heading>
    )
}

export default GameHeading;