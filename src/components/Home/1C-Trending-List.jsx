import { TrendingArticle } from "./1D-Trending-Article"

export const TrendingList = (props) =>
{
    const CurrentArticles = props.CurrentArticles
    const sortedArticles = CurrentArticles.sort((a,b) => {return a.votes - b.votes}) //sorts all articles by votes
    const stringifiedArray = JSON.stringify(sortedArticles) //stringifies sorted articles to create deep copy
    const newSortedTrendingArray = JSON.parse(stringifiedArray).slice(0, 10) //first 10 elements of deep copy
    return(
        <div id="Trending_List">
            <ul>
                {newSortedTrendingArray.map((article) => {return <TrendingArticle article={article}/>})}
            </ul>
        </div>
    )
}