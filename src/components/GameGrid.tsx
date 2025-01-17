import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Platform} from "../hooks/useGames.ts";
import GameCard from "../components/GameCard.tsx";
import GameCardSkeleton from "../components/GameCardSkeleton.tsx";
import GameCardContainer from "../components/GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";


interface Props {
    selectedGenre: Genre | null
    selectedPlatform: Platform | null
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
    const{data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeletons =[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return(
        <>
        {error && <Text>{error}</Text>}
        {/* for the columns we're determining the size based on a device   */}
        <SimpleGrid columns={{sm:1, md: 2, lg:3, xl:5}} padding={'10px'} spacing={3}>
            {isLoading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
            )}
            {data.map(game=>
                <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                </GameCardContainer>

            )}
        </SimpleGrid>
        </>
    )
}

export default GameGrid