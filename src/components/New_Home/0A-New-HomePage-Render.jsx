import { useEffect, useState } from "react"
import { useSearchParams} from "react-router-dom"
import { getAllArticles } from "../../utils"
import { AllArticles } from "./1A-All-Articles"
export const NewHomePageRender = () =>
{
    const [loadedBool, setLoadBool] = useState(false)
    useEffect(() => {setLoadBool(true)}, [CurrentArticles])
    const [ascButton, setButton] = useState(true)
    const [CurrentArticles, SetCurrentArticles] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentSort, setSort] = useState("")
    let topicQuery = searchParams.get('topic')
    let sortByQuery = searchParams.get('sort_by')
    let orderQuery = searchParams.get('order')

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
            console.log(data)
            SetCurrentArticles([...data])
        })
    }, [topicQuery, sortByQuery, orderQuery])
    



    return(
        loadedBool?
        <div id="Article_Page_Render">
            <section id="Topic_Buttons">
                <button onClick={() => {resetTopic()}}>display all</button>
                <button onClick={() => {codingTopic()}}>coding</button>
                <button onClick={() => {cookingTopic()}}>cooking</button>
                <button onClick={() => {footballTopic()}}>football</button>
            </section>
            <section id="Sort_By_Bar">
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
            
            <AllArticles CurrentArticles={CurrentArticles} />
        </div>
        :
        <div id="Article_Page_Render">
            <section id="Topic_Buttons">
                <button onClick={() => {resetTopic()}}>display all</button>
                <button onClick={() => {codingTopic()}}>coding</button>
                <button onClick={() => {cookingTopic()}}>cooking</button>
                <button onClick={() => {footballTopic()}}>football</button>
            </section>
            <section id="Sort_By_Bar">
                <select>
                    <option value="">sort by</option>
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
           
            <h1>Loading Articles Please Wait (this may take up to a minute)</h1>
        </div>
    )
}