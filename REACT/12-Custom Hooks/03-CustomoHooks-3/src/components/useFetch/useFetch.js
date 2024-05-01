import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fecthData = async ()=>{
            try {
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }
        fecthData()
    },[url])

    return {data, loading, error}
}

export default useFetch