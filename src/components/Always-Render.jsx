import { Routes, Route } from 'react-router-dom'
import { ArticlePageRender } from './articles_:article_id/0A-Article-Page-Render'
import { NewHomePageRender } from './Search/0A-New-HomePage-Render'
import { About } from './About/About'
import { Home } from './Home/Home'
import uuid from 'react-uuid'
export const AlwaysRender = () =>
{
    return(
        <div id="Always_Render">
            <Routes>
                <Route path="/" element={<Home key={uuid()}/>} />
                <Route path="/about" element={<About key={uuid()}/>} />
                <Route path="/articles" element={<NewHomePageRender key={uuid()}/>} />
                <Route path="/articles/:article_id" element={<ArticlePageRender key={uuid()}/>} />
            </Routes>
        </div>
    )
}