export const SingleArticleComments = (props) =>
{
    const comment = props.comment
    return(
        <div className="Single_Comment_Card">
            <p>{comment.author} ({comment.created_at})</p>
            <p>{comment.body}</p>
            <p>votes: {comment.votes}</p>
        </div>
    )
}