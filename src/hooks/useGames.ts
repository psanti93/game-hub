
import useData from "../hooks/useData.ts";

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


const useGames = () => useData<Game>("/games")

export default useGames;