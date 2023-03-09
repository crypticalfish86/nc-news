import { ArticleTitle } from "./1C(A)-Single-Article-Title"
import { Body } from "./1C(B)-Single-Article-Body"
import { ArticleInfo } from "./1C(C)-Single-Article-Info"

export const Article = (props) =>
{
    const currentSingleArticle = props.currentSingleArticle

    return(
        <div id="Single_Article">
            <ArticleTitle title={currentSingleArticle.title} />
            <Body body={currentSingleArticle.body} img={currentSingleArticle.article_img_url} author={currentSingleArticle.author}/>
            <ArticleInfo  votes={currentSingleArticle.votes} comment_count={currentSingleArticle.comment_count} article_id={currentSingleArticle.article_id}/>
        </div>
    )
}