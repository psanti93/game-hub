import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";

// Refactoring using a Query Object Example
export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
}

const App = () => {

    // genre and game grid both share the app as the parent component
    // when passing state between components you should try to propagate state change to the closest parent component
    // original
    // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
            <GridItem area={'nav'}> <NavBar/> </GridItem>
            {/*only show on devices bigger than a mobile device*/}
            <Show above={"lg"}>
                <GridItem area={'aside'} paddingX={5}>
                    <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                </GridItem>
            </Show>
            <GridItem area={'main'} >
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatformSelector>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App;