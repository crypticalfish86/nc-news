export const ArticleTitle = (props) =>
{
    const title = props.title
    const author = props.author
    const date = props.date
    const topic = props.topic
    return(
        <div id="Single_Article_Title" className="Single_Article_Child">
            <section>
                <h2>{title}</h2>
                <p>by {author}</p>
                <p>written: {date}</p>
                <p>topic: {topic}</p>
            </section>
        </div>
    )
}