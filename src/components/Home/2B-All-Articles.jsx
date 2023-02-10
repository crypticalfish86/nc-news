import { Link } from "react-router-dom"
import { ArticleList } from "./2C-Article-List"

export const AllArticles = (props) =>
{
    const CurrentArticles = props.CurrentArticles
   
       return(
        <div id="All_Articles" className="HomePage_Render_Direct_Child">
            <h4>Search by topic</h4>
            <section id="Search_Topic">
                <Link to={"/articles/search/cooking"}>Cooking</Link>
                <Link to={"/articles/search/football"}>Football</Link>
                <Link to={"/articles/search/coding"}>Coding</Link>
            </section>
            <h2>All Articles</h2>
            <ArticleList CurrentArticles={CurrentArticles}/>
        </div>
    )
}