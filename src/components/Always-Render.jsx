import { Routes, Route } from 'react-router-dom'
import { ArticlePageRender } from './articles_:article_id/0A-Article-Page-Render'
import { NewHomePageRender } from './New_Home/0A-New-HomePage-Render'
export const AlwaysRender = () =>
{
    return(
        <div id="Always_Render">
            <Routes>
                <Route path="/articles" element={<NewHomePageRender />} />
                <Route path="/articles/:article_id" element={<ArticlePageRender />} />
            </Routes>
        </div>
    )
}