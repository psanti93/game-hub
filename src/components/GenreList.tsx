import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Button, Spinner, Heading} from "@chakra-ui/react";
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
           <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
           <List>
               {data.map((genre) =>

                   <ListItem key={genre.id} paddingY={'5px'}>
                       <HStack>
                           <Image
                               boxSize='32px'
                               borderRadius={8}
                               objectFit={'cover'}
                               src={getCroppedImageUrl(genre.image_background)}
                           />
                           <Button whiteSpace={"normal"} textAlign={'left'} fontSize={'lg'} fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>

                       </HStack>
                   </ListItem>
               )}

           </List>
        </>

    )
}

export default GenreList;