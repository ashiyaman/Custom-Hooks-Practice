import { useEffect, useState } from "react"

export async function useFetch(url){
    const [data, setData] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(async() => {
        try{
            await fetch(url)
                .then(response => {
                    console.log(response.status)
                    if(!response.ok){
                        setError(error)
                    }
                    const json = await response.json()
                })       
        }
        catch(error){
            setError(error)
        }
    })
    
    return {data, loading, error}
}