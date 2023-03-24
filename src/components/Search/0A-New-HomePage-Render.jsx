import { useEffect, useState } from "react"
import { useSearchParams} from "react-router-dom"
import { getAllArticles } from "../../utils"
import { AllArticles } from "./1A-All-Articles"
import uuid from "react-uuid"
export const NewHomePageRender = () =>
{
    const [loadedBool, setLoadBool] = useState(false)

    const [ascButton, setButton] = useState(true)
    const [CurrentArticles, SetCurrentArticles] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentSort, setSort] = useState("")
    let topicQuery = searchParams.get('topic')
    let sortByQuery = searchParams.get('sort_by')
    let orderQuery = searchParams.get('order')

    useEffect(() => 
    {
        if(CurrentArticles.length !== 0)
        {
            setLoadBool(true)
        }
    }, [CurrentArticles])

    function resetTopic()
    {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('topic', "")
        setSearchParams(newParams)
    }
    function codingTopic()
    {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('topic', "coding")
        setSearchParams(newParams)
    }
    function cookingTopic()
    {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('topic', "cooking")
        setSearchParams(newParams)
    }
    function footballTopic()
    {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('topic', "football")
        setSearchParams(newParams)
    }
    function changeSort(event)
    {
        const newParams = new URLSearchParams(searchParams)
        let sortByUpdate = ""
        switch(event.target.value)
        {
            case "title":
                setSort("title")
                sortByUpdate = "title"
                break;
            case "created_at":
                setSort("created_at")
                sortByUpdate = "created_at"
                break;
            case "votes":
                setSort("votes")
                sortByUpdate = "votes"
                break;
            case "author":
                setSort("author")
                sortByUpdate = "author"
                break;
            case "comment_count":
                setSort("comment_count")
                sortByUpdate = "comment_count"
                break;
            default:
                setSort("")
                sortByUpdate = ""
                break;
        }
        newParams.set('sort_by', sortByUpdate)
        setSearchParams(newParams)
    }
    function ascChange()
    {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', 'ASC')
        setSearchParams(newParams)
        setButton(false)
    }
    function descChange()
    {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', 'DESC')
        setSearchParams(newParams)
        setButton(true)
    }

    useEffect(() => 
    {
        topicQuery = searchParams.get('topic')
        sortByQuery = searchParams.get('sort_by')
        orderQuery = searchParams.get('order')
        getAllArticles(topicQuery, sortByQuery, orderQuery)
        .then(({ data }) =>
        {
            SetCurrentArticles([...data])
        })
    }, [topicQuery, sortByQuery, orderQuery])
    



    return(
        loadedBool?
        <div id="Article_Page_Render">
            <section id="Topic_Buttons">
                <button onClick={() => {resetTopic()}} className="button">display all</button>
                <button onClick={() => {codingTopic()}} className="button">coding</button>
                <button onClick={() => {cookingTopic()}} className="button">cooking</button>
                <button onClick={() => {footballTopic()}} className="button">football</button>
                <select value={currentSort} onChange={(event) => {changeSort(event)}}>
                    <option value="">sort by</option>
                    <option value="title">title</option>
                    <option value="created_at">date published</option>
                    <option value="votes">votes</option>
                    <option value="author">author</option>
                    <option value="comment_count">comments</option>
                </select>
                    {
                        ascButton?
                        <button onClick={() => {ascChange()}}id="ASC_Button">^</button>
                        :
                        <button onClick={() => {descChange()}} id="DESC_Button">⌄</button>
                    }
            </section>
            
            
            <AllArticles CurrentArticles={CurrentArticles} key={uuid()}/>
        </div>
        :
        <div id="Article_Page_Render">
            <div>
                <h1>Loading Articles Please Wait (this may take several minutes)</h1>
                <div className="container">
                    <span className="react-logo">
                        <span className="nucleo"></span>
                    </span>
                </div>
            </div>

        </div>
    )
}