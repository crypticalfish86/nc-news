import { getAllArticles } from "../../utils"
import { useEffect, useState } from "react"
import { SortedArticle } from "../Home/2D-Sorted-Article"

export const ArticleSearchRenderCooking = () =>
{
    const [CurrentArticles, SetCurrentArticles] = useState([])
    useEffect(() => 
    {
        getAllArticles("?topic=cooking")
        .then(({ data }) =>
        {
            SetCurrentArticles([...data])
        })
    }, [])
    
    getAllArticles()
    return(
        <div className="Article_Query_Search_Render" id="Article_Cooking_Search_Render">
            <h1>cooking</h1>
            <ul>
                {CurrentArticles.map((article) => {return <SortedArticle article={article}/>})}
            </ul>
        </div>
    )
}