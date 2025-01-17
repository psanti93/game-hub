import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, List, ListItem,Image,Button, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";


interface Props{
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}


const GenreList = ({onSelectedGenre, selectedGenre} : Props) => {
    const {data, error, isLoading} =useGenres()

    if (error) return null;

    return(
        <>
            {isLoading && <Spinner/>}
           <List>
               {data.map((genre) =>

                   <ListItem key={genre.id} paddingY={'5px'}>
                       <HStack>
                           <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}
                           />
                           <Button fontSize={'lg'} fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>

                       </HStack>
                   </ListItem>
               )}

           </List>
        </>

    )
}

export default GenreList;