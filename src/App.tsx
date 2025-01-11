import {Grid, GridItem, Show} from "@chakra-ui/react";

const App = () => {
    return(
        <Grid templateAreas={{
            base: `"nav" "main"`, // for smaller devices - mobile device
            lg: `"nav nav" "aside main"`, // for bigger devices

        }}>
            <GridItem area={'nav'} bg={'coral'}> Nav </GridItem>
            {/*only show on devices bigger than a mobile device*/}
            <Show above={"lg"}>
                <GridItem area={'aside'} bg={'gold'}> Aside </GridItem>
            </Show>
            <GridItem area={'main'} bg={'dodgerblue'}>Main</GridItem>
        </Grid>
    )
}

export default App;