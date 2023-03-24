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
                <div id="Comment_Title_Box" >
                    <p id="Comment_Title">{comment.author}</p>
                </div>
                <div>
                    <p>{comment.body}</p>
                </div>
                <div>
                    <p>votes: {comment.votes}</p>
                    {comment.created_at}
                </div>
                <button onClick={(event) => {deleteComment(event, comment.comment_id)}}>Delete</button>
            </div>
        )
        
    )
}