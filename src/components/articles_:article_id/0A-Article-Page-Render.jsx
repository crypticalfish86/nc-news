import { Article } from "./1B-Article"
import{ useParams } from 'react-router-dom'
import { getSingleArticle } from "../../utils"
import { useState, useEffect } from "react"

export const ArticlePageRender = () =>
{
    const { article_id } = useParams() 
    const [currentSingleArticle, setSingleArticle] = useState({})
    const [loadedBool, setLoadBool] = useState(false)
    useEffect(() =>
    {
        getSingleArticle(article_id)
    .then(({ data }) =>
    {
        setSingleArticle(data)
    })
    }, [])
    useEffect(() => 
    {
        if(currentSingleArticle.title !== undefined)
        {
            setLoadBool(true)
        }
    }, [currentSingleArticle])
    return(
        loadedBool?<div id="Single_Article_Page_Render">
            <Article currentSingleArticle={currentSingleArticle}/>  
        </div> : 
        <div>
            <h1>Please Wait Loading Article(this may take a couple of minutes)</h1>
            <div className="container">
                <span className="react-logo">
                    <span className="nucleo"></span>
                </span>
            </div>
        </div>
        
    )
}