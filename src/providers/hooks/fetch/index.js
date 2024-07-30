import { useEffect, useState } from "react";
const API = "425347d0661e47c08b6bca7ad2e6bf63"
export function useFetch(endpoint) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${endpoint}&apiKey=${API}`)
                if (response.ok) {
                    const fetchedData = await response.json()
                    setData(fetchedData)
                } else {
                    setError('Request failed')
                }
             } catch (error) {
                setError('Request failed')
            }
            setLoading(false)

        }


        fetchData()
    }, [endpoint])

    return {data, loading, error}
}