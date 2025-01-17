import apiClient from "../services/api-client.ts";
import {useEffect, useState} from "react";
import {AxiosRequestConfig, CanceledError} from "axios";


interface FetchResponse<T> {
    count: number,
    results: T[]
}
// generic way of setting the endpoint for both genres and game

const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint,{signal: controller.signal, ...requestConfig})
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
    }, deps ? [...deps] : [])
    // ^you'll get an error if you don't do this tertiary condition check, cause deps can be undefined. This ensures that if there are deps you can pass them in otherwise no requeest will be made
    // adding this so that you can pass in the parameters to make the filtered request, leaving an empty array won't make another call
    // any dependencies added will rerun the effect in order to make the call to the server

    return {data, error, isLoading}
}

export default useData;