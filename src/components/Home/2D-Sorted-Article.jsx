import { Link } from 'react-router-dom'

export const SortedArticle = (props) =>
{
    const article = props.article
    return(
        <div className="Article_Card">
            <section>
                <Link to={`/articles/${article.article_id}`}>
                {article.title}
                </Link>
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