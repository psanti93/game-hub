import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";

const App = () => {
    return(
        <Grid templateAreas={{
            base: `"nav" "main"`, // for smaller devices - mobile device
            lg: ` "nav nav"  "aside main"`, // for bigger devices //this determines the order too of how the items are set

        }}>
            <GridItem area={'nav'}> <NavBar/> </GridItem>

            {/*only show on devices bigger than a mobile device*/}
            <Show above={"lg"}>
                <GridItem area={'aside'}> <GenreList/> </GridItem>
            </Show>
            <GridItem area={'main'} >
                <GameGrid/>
            </GridItem>
        </Grid>
    )
}

export default App;