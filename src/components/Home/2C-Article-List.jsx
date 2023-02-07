import { SortedArticle } from "./2D-Sorted-Article"

export const ArticleList = (props) =>
{   
    const FilteredArticles = props.FilteredArticles

    return(
        <div id="Sorted_List">
            <ul>
                {FilteredArticles.map((article) => {return <SortedArticle article={article}/>})}
            </ul>
        </div>
    )
}
