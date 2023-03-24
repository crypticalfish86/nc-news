import { Link } from 'react-router-dom'

export const SortedArticle = (props) =>
{
    const article = props.article
    const date = article.created_at.slice(0, 10)
    return(
        <div id="Align_Articles">
                <div id="Article_Card_Header">
                    <Link to={`/articles/${article.article_id}`} id="HyperLink">
                        {article.title}
                    </Link>
                </div>
            <div className="Article_Card">
                <div>
                    <img src={article.article_img_url} alt="" id="Article_Card_Image"/>
                </div>
                <div id="Article_Card_Information">
                    <p className='Article_Text'>
                    by {article.author}
                    </p>
                    <p className='Article_Text'>
                    votes: {article.votes}  
                    </p>
                    <p>
                    comments: {article.comment_count}
                    </p>
                    <p>
                    published: {date}
                    </p>  
                </div>
            </div>
        </div>   
    )
}