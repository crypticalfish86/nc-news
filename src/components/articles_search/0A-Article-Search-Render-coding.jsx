import { getAllArticles } from "../../utils"
import { useEffect, useState } from "react"
import { SortedArticle } from "../Home/2D-Sorted-Article"

export const ArticleSearchRenderCoding = () =>
{
    const [CurrentArticles, SetCurrentArticles] = useState([])
    useEffect(() => 
    {
        getAllArticles("?topic=coding")
        .then(({ data }) =>
        {
            SetCurrentArticles([...data])
        })
    }, [])
    
    getAllArticles()
    return(
        <div className="Article_Query_Search_Render" id="Article_Coding_Search_Render">
            <h1>coding</h1>
            <ul>
                {CurrentArticles.map((article) => {return <SortedArticle article={article}/>})}
            </ul>
        </div>
    )
}