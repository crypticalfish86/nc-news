import { Routes, Route } from 'react-router-dom'
import { HomePageRender } from './Home/0A-HomePage-Render'
import { ArticlePageRender } from './articles_:article_id/0A-Article-Page-Render'
import { ArticleSearchRenderCoding } from './articles_search/0A-Article-Search-Render-coding'
import { ArticleSearchRenderCooking } from './articles_search/0B-Article-Search-Render-cooking copy 2'
import { ArticleSearchRenderFootball } from './articles_search/0C-Article-Search-Render-football'
export const AlwaysRender = () =>
{
    return(
        <div id="Always_Render">
            <Routes>
                <Route path="/" element={<HomePageRender />} />
                <Route path="/articles/:article_id" element={<ArticlePageRender />} />
                <Route path="/articles/search/cooking" element={<ArticleSearchRenderCooking />}/>
                <Route path="/articles/search/football" element={<ArticleSearchRenderFootball />}/>
                <Route path="/articles/search/coding" element={<ArticleSearchRenderCoding />}/>
            </Routes>
        </div>
    )
}