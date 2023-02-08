import { Routes, Route } from 'react-router-dom'
import { HomePageRender } from './Home/0A-HomePage-Render'
import { ArticlePageRender } from './articles_:article_id/0A-Article-Page-Render'
export const AlwaysRender = () =>
{
    return(
        <div id="Always_Render">
            <Routes>
                <Route path="/" element={<HomePageRender />} />
                <Route path="/articles/:article_id" element={<ArticlePageRender />} />
            </Routes>
        </div>
    )
}