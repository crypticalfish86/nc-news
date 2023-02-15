import { useEffect, useState } from "react"
import { useSearchParams} from "react-router-dom"
import { getAllArticles } from "../../utils"
export const NewHomePageRender = () =>
{
    const [CurrentArticles, SetCurrentArticles] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    let topicQuery = searchParams.get('topic')
    let sortByQuery = searchParams.get('sort_by')
    let orderQuery = searchParams.get('order')

    useEffect(() => 
    {
        getAllArticles(topicQuery, sortByQuery, orderQuery)
        .then(({ data }) =>
        {
            console.log(data)
            SetCurrentArticles([...data])
        })
    }, [topicQuery, sortByQuery, orderQuery])
    
    const [loadedBool, setLoadBool] = useState(false)
    useEffect(() => {setLoadBool(true)}, [CurrentArticles])

    return(
        <div id="Article_Page_Render">
            <section id="Topic_Buttons">
                <button>display all</button>
                <button>coding</button>
                <button>cooking</button>
                <button>football</button>
            </section>
            <select>
                <option>select sort by</option>
            </select>
        </div>
    )
}