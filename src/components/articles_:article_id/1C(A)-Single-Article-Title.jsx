export const ArticleTitle = (props) =>
{
    const title = props.title
    return(
        <div id="Single_Article_Title" className="Single_Article_Child">
                <h2>{title}</h2>
        </div>
    )
}