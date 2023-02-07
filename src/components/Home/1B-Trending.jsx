import { TrendingList } from './1C-Trending-List'

export const Trending = (props) =>
{
    const CurrentArticles = props.CurrentArticles
    return(
        <div id="Trending" className="HomePage_Render_Direct_Child">
            <section>
                <h1 className="HomePage_Render_Direct_Child_Title">Trending Now</h1>
                <TrendingList CurrentArticles={CurrentArticles}/>
            </section>
        </div>
    )
}