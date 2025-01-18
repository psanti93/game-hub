import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string;
}

const App = () => {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return(
        <Grid
            templateAreas={{
            base: `"nav" "main"`, // for smaller devices - mobile device
            lg: ` "nav nav"  "aside main"`, // for bigger devices //this determines the order too of how the items are set

        }}
        templateColumns={{   // applies a fix width for our aside column
            base: '1fr',
            lg: '200px 1fr'
        }}

        >
            <GridItem area={'nav'}> <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/> </GridItem>
            {/*only show on devices bigger than a mobile device*/}
            <Show above={"lg"}>
                <GridItem area={'aside'} paddingX={5}>
                    <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                </GridItem>
            </Show>
            <GridItem area={'main'} >
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    {/*adding flex && boox here handls the CSS "margin" styles cannot be used to apply padding between the popper warning*/}
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatformSelector>
                        </Box>
                        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App;