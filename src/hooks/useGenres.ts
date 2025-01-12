import apiClient from "../services/api-client.ts";
import {useEffect, useState} from "react";
import {CanceledError} from "axios";

interface Genre {
    id: number,
    name: string,
}

interface FetchGenresResponse {
    count: number,
    results: Genre []
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient
            .get<FetchGenresResponse>("/genres",{signal: controller.signal})
            .then((response) => {
                setGenres(response.data.results)
                setIsLoading(false)
            })
            .catch(error => {
                    if (error instanceof CanceledError) return
                    setError(error)
                setIsLoading(false)
                }
            )

        return () => controller.abort()
    }, [])


    return {genres, error, isLoading}
}

export default useGenres;