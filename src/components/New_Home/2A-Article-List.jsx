import { SortedArticle } from "./3A-Sorted-Article"
import uuid from "react-uuid"

export const ArticleList = (props) =>
{   
    const CurrentArticles = props.CurrentArticles
    return(
        <div id="Sorted_List">
            <ul>
                {CurrentArticles.map((article) => {return <SortedArticle article={article} key={uuid()}/>})}
            </ul>
        </div>
    )
}
