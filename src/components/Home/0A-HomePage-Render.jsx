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
    const [loadedBool, setLoadBool] = useState(false)
    useEffect(() => {setLoadBool(true)}, [CurrentArticles])
    return(
        loadedBool?<div id="Home_Page_Render">
            <AllArticles CurrentArticles={CurrentArticles}/>
        </div> : <h1>Please wait, loading Article List(this may take up to a minute)</h1>
    )
}