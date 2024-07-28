import { useEffect, useState } from "react";

export function useFetch(endpoint) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${endpoint}&lang=en&country=us&max=10&apikey=f8bbc4a6d1c0e3cc9484aa184380629d`)
                if (response.ok) {
                    const fetchedData = await response.json()
                    setData(fetchedData)
                } else {
                    setError('Request failed')
                }
             } catch (error) {
                setError('Request failed')
            }
        }

        setLoading(false)

        fetchData()
    })

    return {data, loading, error}
}