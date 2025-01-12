import useGenres from "../hooks/useGenres.ts";
import {Text} from "@chakra-ui/react";


const GenreList = () => {
    const {data, error, isLoading} =useGenres()

    return(
        <>
            {error && <Text>{error}</Text>}
            {isLoading && <p>Loading...</p>}
            <ul>
                {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </>

    )
}

export default GenreList;