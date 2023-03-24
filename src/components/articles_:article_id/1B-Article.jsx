import { ArticleTitle } from "./1C(A)-Single-Article-Title"
import { Body } from "./1C(B)-Single-Article-Body"

export const Article = (props) =>
{
    const currentSingleArticle = props.currentSingleArticle

    return(
        <div id="Single_Article">
            <ArticleTitle title={currentSingleArticle.title} />
            <Body currentSingleArticle={currentSingleArticle} body={currentSingleArticle.body} img={currentSingleArticle.article_img_url} author={currentSingleArticle.author}/>
        </div>
    )
}