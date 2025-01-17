
import useData from "../hooks/useData.ts";
import {GameQuery} from "../App.tsx";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform:Platform}[] // array of objects of type platform
    metacritic: number
}


const useGames = (gameQuery: GameQuery) =>
    useData<Game>("/games", {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder
        }},
        [gameQuery]
    )

export default useGames;