import { Trending } from './1B-Trending'
import { AllArticles } from './2B-All-Articles'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllArticles } from '../../utils'

export const HomePageRender = () =>
{
    const [CurrentArticles, SetCurrentArticles] = useState([])
    useEffect(() => 
    {
        getAllArticles()
        .then(({ data }) =>
        {
            SetCurrentArticles([...data])
        })
    }, [])
    return(
        <div id="Home_Page_Render">
            <Trending CurrentArticles={CurrentArticles}/>
            <AllArticles CurrentArticles={CurrentArticles}/>
        </div>
    )
}