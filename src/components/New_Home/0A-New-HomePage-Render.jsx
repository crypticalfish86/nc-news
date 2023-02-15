import { useEffect, useState } from "react"
import { useSearchParams} from "react-router-dom"
import { getAllArticles } from "../../utils"
export const NewHomePageRender = () =>
{
    const [CurrentArticles, SetCurrentArticles] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const topicQuery = searchParams.get('topic')
    const sortByQuery = searchParams.get('sort_by')
    const orderQuery = searchParams.get('order')
    console.log(topicQuery)
    console.log(sortByQuery)
    console.log(orderQuery)
    useEffect(() => 
    {
        getAllArticles()
        .then(({ data }) =>
        {
            SetCurrentArticles([...data])
        })
    }, [])
    
    const [loadedBool, setLoadBool] = useState(false)
    useEffect(() => {setLoadBool(true)}, [CurrentArticles])

    return(
        <div></div>
    )
}