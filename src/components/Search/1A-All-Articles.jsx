import { ArticleList } from "./2A-Article-List"
import uuid from "react-uuid"

export const AllArticles = (props) =>
{
    const CurrentArticles = props.CurrentArticles
   
       return(
        <div id="All_Articles" className="HomePage_Render_Direct_Child">
            <ArticleList CurrentArticles={CurrentArticles} key={uuid()}/>
        </div>
    )
}