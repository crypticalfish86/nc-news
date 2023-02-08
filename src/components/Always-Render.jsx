import { Routes, Route } from 'react-router-dom'
import { HomePageRender } from './Home/0A-HomePage-Render'
export const AlwaysRender = () =>
{
    return(
        <div id="Always_Render">
            <Routes>
                <Route path="/" element={<HomePageRender />} />
            </Routes>
        </div>
    )
}