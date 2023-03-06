import { Routes, Route } from 'react-router-dom'
import { ArticlePageRender } from './articles_:article_id/0A-Article-Page-Render'
import { NewHomePageRender } from './New_Home/0A-New-HomePage-Render'
import { StartupPage } from './startup_page/startup'
import uuid from 'react-uuid'
export const AlwaysRender = () =>
{
    return(
        <div id="Always_Render">
            <Routes>
                <Route path="/" element={<StartupPage key={uuid()}/>} />
                <Route path="/articles" element={<NewHomePageRender key={uuid()}/>} />
                <Route path="/articles/:article_id" element={<ArticlePageRender key={uuid()}/>} />
            </Routes>
        </div>
    )
}