import { getAllArticles } from "../../utils"
import { useEffect, useState } from "react"
import { SortedArticle } from "../Home/2D-Sorted-Article"

export const ArticleSearchRenderFootball = () =>
{
    const [CurrentArticles, SetCurrentArticles] = useState([])
    useEffect(() => 
    {
        getAllArticles("?topic=football")
        .then(({ data }) =>
        {
            SetCurrentArticles([...data])
        })
    }, [])
    
    getAllArticles()
    return(
        <div className="Article_Query_Search_Render" id="Article_Football_Search_Render">
            <h1>football</h1>
            <ul>
                {CurrentArticles.map((article) => {return <SortedArticle article={article}/>})}
            </ul>
        </div>
    )
}