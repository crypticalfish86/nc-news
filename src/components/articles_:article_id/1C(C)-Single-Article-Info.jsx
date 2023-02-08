export const ArticleInfo = (props) =>
{
    const votes = props.votes
    const comment_count = props.comment_count
    return(
        <div id="Single_Article_Info" className="Single_Article_Child">
            <section>
                <p>votes:{votes}</p>
                <p>show comments ({comment_count})</p>
            </section>
        </div>
    )
}