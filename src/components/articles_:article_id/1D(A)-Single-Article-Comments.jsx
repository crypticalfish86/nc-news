import { deleteSingleArticleComment } from "../../utils"
import { useState } from "react"

export const SingleArticleComments = (props) =>
{
    const comment = props.comment
    const [deletedBool, changeDeleteBool] = useState(false)

    function deleteComment(event, comment_id)
    {
        event.preventDefault()
        changeDeleteBool(true)
        deleteSingleArticleComment(comment_id)
    }
    return(deletedBool?
        (
            <div>[Comment_Deleted]</div>
        )
        :
        (
            <div className="Single_Comment_Card">
                <p>{comment.author} ({comment.created_at})</p>
                <p>{comment.body}</p>
                <p>votes: {comment.votes}</p>
                <button onClick={(event) => {deleteComment(event, comment.comment_id)}}>Delete</button>
            </div>
        )
        
    )
}