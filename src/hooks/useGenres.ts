
import useData from "../hooks/useData.ts";

export interface Genre {
    id: number,
    name: string,
    image_background: string,
}


// put useData in here to hide exposure of the endpoint in the component
const useGenres = () => useData<Genre>("/genres")

export default useGenres;