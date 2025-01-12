import apiClient from "../services/api-client.ts";
import {useEffect, useState} from "react";
import {CanceledError} from "axios";


interface FetchResponse<T> {
    count: number,
    results: T[]
}
// generic way of setting the endpoint for both genres and game

const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint,{signal: controller.signal})
            .then((response) => {
                setData(response.data.results)
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


    return {data, error, isLoading}
}

export default useData;