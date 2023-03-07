import { Link } from 'react-router-dom'

export const SortedArticle = (props) =>
{
    const article = props.article
    return(
        <div id="Align_Articles">
                <div id="Article_Card_Header">
                    <Link to={`/articles/${article.article_id}`} id="HyperLink">
                        {article.title}
                    </Link>
                </div>
            <div className="Article_Card">
            <img src={article.article_img_url} alt="" width="120" height="120"/>
                <section>


                    <p>
                    by {article.author}
                    </p>
                    <p>
                    votes: {article.votes}
                    </p> 
                    <p>
                        comments: {article.comment_count}
                    </p>
                </section>
            </div>
        </div>
        
    )
}