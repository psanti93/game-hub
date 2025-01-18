import genres from "../data/genres"
export interface Genre {
    id: number,
    name: string,
    image_background: string,
}


// put useData in here to hide exposure of the endpoint in the component
const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;