import { ArticleList } from "./2C-Article-List"
import { useState } from 'react'
import { useEffect } from 'react'

export const AllArticles = (props) =>
{
    const CurrentArticles = props.CurrentArticles
    const [CurrentFilter, SetFilter] = useState("")
    const [FilteredArticles, SetFilteredArticles] = useState([...CurrentArticles]) //this does not load on startup for some reason can't figure out why
    function checkFilter(event)
    {
        event.preventDefault()
        switch(event.target.value)
        {
            case "coding":
                SetFilter("coding")
                break;
            case "cooking":
                SetFilter("cooking")
                break;
            case "football":
                SetFilter("football")
                break;
            default:
                SetFilter("All")
                break;
        }
    }
    function filterArticles(select, arrOfObj)
    {
        switch(select)
        {
            case "coding":
                return arrOfObj.filter((article) => 
                {
                    return article.topic === "coding"
                })
            case "cooking":
                return arrOfObj.filter((article) => 
                {
                    return article.topic === "cooking"
                })
            case "football":
                return arrOfObj.filter((article) => 
                {
                    return article.topic === "football"
                })
            default:
                return arrOfObj
        }
    }
    useEffect(() =>
    {
        SetFilteredArticles(filterArticles(CurrentFilter, CurrentArticles))
    }, [CurrentFilter]) //we have now filtered the relevant articles, pass it down to articleList
    return(
        <div id="All_Articles" className="HomePage_Render_Direct_Child">
            <section>
                <h1 className="HomePage_Render_Direct_Child_Title">Read More</h1>
                <p>choose topic</p>
                <select onChange={(event) => {checkFilter(event)}}>
                    <option value="All">All</option>
                    <option value="coding">Coding</option>
                    <option value="cooking">Cooking</option>
                    <option value="football">Football</option>
                </select>
            </section>
            <ArticleList FilteredArticles={FilteredArticles}/>
        </div>
    )
}