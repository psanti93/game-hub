import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";

const App = () => {

    // genre and game grid both share the app as the parent component
    // when passing state between components you should try to propagate state change to the closest parent component
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)


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
                    <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
                </GridItem>
            </Show>
            <GridItem area={'main'} >
                <GameGrid selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>
    )
}

export default App;