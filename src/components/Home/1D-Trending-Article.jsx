export const TrendingArticle = (props) =>
{
    const article = props.article
    return(
    <div className="Article_Card">
        <section>
            <h3>
            {article.title}
            </h3>
            <p>
            by {article.author}
            </p>
            <p>
            votes: {article.votes}
            </p> 
        </section>
        <img src={article.article_img_url} alt="" width="100" height="100"/>
    </div>
    )

}