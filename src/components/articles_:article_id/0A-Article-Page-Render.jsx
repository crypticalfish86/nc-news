import { Article } from "./1B-Article"
import{ useParams } from 'react-router-dom'
import { getSingleArticle } from "../../utils"
import { useState, useEffect } from "react"

export const ArticlePageRender = () =>
{
    const { article_id } = useParams() 
    const [currentSingleArticle, setSingleArticle] = useState({})
    useEffect(() =>
    {
        getSingleArticle(article_id)
    .then(({ data }) =>
    {
        setSingleArticle(data)
    })
    }, [])
    return(
        <div id="Article_Page_Render">
            <Article currentSingleArticle={currentSingleArticle}/>
        </div>
    )
}