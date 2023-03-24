import { getAllArticles } from "../../utils"
import { useState, useEffect } from "react"
import { SortedArticle } from "../Search/3A-Sorted-Article"
import uuid from "react-uuid"

export const SeeAlsoArticles = (props) =>
{
    const topic = props.topic
    const [TopicArticles, SetTopicArticles] = useState([])
    
    useEffect
    (
        () =>
        {
            getAllArticles(topic)
            .then(({ data }) => 
            {
                SetTopicArticles(data.slice(0, 7))
            })
        }
        ,[]
    )

    const [loadedBool, setBool] = useState(false)

    useEffect
    (
        () => 
        {
            if(TopicArticles.length != 0)
            {
                setBool(true)
            }
        }
        , [TopicArticles]
    )
    return(
        loadedBool?
        <div id="See_Also_Articles">
            {TopicArticles.map((article) => {return <SortedArticle article={article} key={uuid()}/>})}
        </div>
        :
        <div>
            <div>
                <h1>Loading Articles Please Wait (this may take several minutes)</h1>
                <div className="container">
                    <span className="react-logo">
                        <span className="nucleo"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}