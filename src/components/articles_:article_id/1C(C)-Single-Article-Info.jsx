import { useState, useEffect } from "react"
import { getSingleArticleComments } from "../../utils"
import { SingleArticleComments } from "./1D-Single-Article-Comments"

export const ArticleInfo = (props) =>
{
    const [commentBool, setBool] = useState(false)
    const [currentComments, setComments] = useState([])
    const votes = props.votes
    const comment_count = props.comment_count
    const article_id = props.article_id
    function displayComments(event, article_id)
    {
        event.preventDefault()
        setBool(true)
        getSingleArticleComments(article_id)
        .then(({ data }) =>
        {
            setComments(data)
        })
    }
    function hideComments(event)
    {
        event.preventDefault()
        setBool(false)
    }

    return(
        commentBool?
        (<div id="Single_Article_Info_Comments_Hidden" className="Single_Article_Child">
        <section>
            <p>votes:{votes}</p>
            <button onClick={(event) => {hideComments(event)}}>hide comments</button>
            <section>
                {currentComments.map((comment) => {return(<SingleArticleComments comment={comment}/>)})}
            </section>
        </section>
    </div>)
        :
        (<div id="Single_Article_Info_Comments_Hidden" className="Single_Article_Child">
        <section>
            <p>votes:{votes}</p>
            <button onClick={(event) => (displayComments(event,article_id))}>show comments ({comment_count})</button>
        </section>
    </div>)
    )
}