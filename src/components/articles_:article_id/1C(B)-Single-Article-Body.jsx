import { ArticleInfo } from "./1C(C)-Single-Article-Info"
export const Body = (props) =>
{
    const currentSingleArticle = props.currentSingleArticle
    const body = props.body
    const img = props.img
    const author = props.author
    return(
        <div id="Larger_Body">
            <div id="Single_Article_Body" className="Single_Article_Child">
                <img src={img} alt="" id="Single_Article_Image"/>
                <div id="Body_Text">
                    <p>{body}</p>
                    <p id="Single_Article_Author">by: {author}</p>
                    <ArticleInfo  votes={currentSingleArticle.votes} comment_count={currentSingleArticle.comment_count} article_id={currentSingleArticle.article_id}/>
            </div>
            </div>
        </div>

    )
}