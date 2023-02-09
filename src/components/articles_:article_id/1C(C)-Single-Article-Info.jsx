import { useState, useEffect } from "react"
import { getSingleArticleComments, patchSingleArticleVotes } from "../../utils"
import { SingleArticleComments } from "./1D-Single-Article-Comments"

export const ArticleInfo = (props) =>
{
    const [commentBool, setCommentBool] = useState(false)
    const [currentComments, setComments] = useState([])
    const [upVoteBool, setUpvoteBool] = useState(false)
    const [downVoteBool, setdownvoteBool] = useState(false)
    let votes = props.votes
    const [voteValue, setVoteValue] = useState(0)
    useEffect(() => {setVoteValue(votes)}, [votes]) 
    //use effect runs on first render, any callback will trigger a rerender
    const comment_count = props.comment_count
    const article_id = props.article_id
    function displayComments(event, article_id)
    {
        event.preventDefault()
        setCommentBool(true)
        getSingleArticleComments(article_id)
        .then(({ data }) =>
        {
            setComments(data)
        })
    }
    function hideComments(event)
    {
        event.preventDefault()
        setCommentBool(false)
    }
    function upVote(event)
    {
        event.preventDefault()
        if(upVoteBool)
        {

            setUpvoteBool(false)
            setVoteValue((voteValue) => voteValue - 1) //changes UI
            patchSingleArticleVotes(article_id, -1) //changes API
        }
        else
        {
            if(downVoteBool)
            {
                setUpvoteBool(true)
                setdownvoteBool(false)
                setVoteValue((voteValue) => voteValue + 2) //changes UI
                patchSingleArticleVotes(article_id, 2) //changes API
            }
            else
            {
                setUpvoteBool(true)
                setVoteValue((voteValue) => voteValue + 1) //changes UI
                patchSingleArticleVotes(article_id, 1) //changes API
            }
        }

    }
    function downVote(event)
    {
        event.preventDefault()
        if(downVoteBool)
        {
            setdownvoteBool(false)
            setVoteValue((voteValue) => voteValue + 1) //changes UI
            patchSingleArticleVotes(article_id, 1) //changes API
        }
        else
        {
            if(upVoteBool)
            {
                setdownvoteBool(true)
                setUpvoteBool(false)
                setVoteValue((voteValue) => voteValue - 2) //changes UI
                patchSingleArticleVotes(article_id, -2) //changes API
            }
            else
            {
                setdownvoteBool(true)
                setVoteValue((voteValue) => voteValue - 1) //changes UI
                patchSingleArticleVotes(article_id, -1) //changes API
            }
        }
    }


    return(
        commentBool?
        (<div id="Single_Article_Info_Comments_Hidden" className="Single_Article_Child">
        <section>
            <section id="Voting">
                <button id="Up_Vote" className="Vote_button" onClick={(event) => {upVote(event)}}>+</button>
                <p>votes:{voteValue}</p>
                <button id="Down_Vote" className="Vote_Button" onClick={(event) => {downVote(event)}}>-</button>
            </section>

            <button id="Show_Comments_Button" onClick={(event) => {hideComments(event)}}>hide comments</button>
            <section>
                {currentComments.map((comment) => {return(<SingleArticleComments comment={comment}/>)})}
            </section>
        </section>
    </div>)
        :
        (<div id="Single_Article_Info_Comments_Hidden" className="Single_Article_Child">
        <section>
            <section id="Voting">
                <button id="Up_Vote" className="Vote_button" onClick={(event) => {upVote(event)}}>+</button>
                <p>votes:{voteValue}</p>
                <button id="Down_Vote" className="Vote_Button" onClick={(event) => {downVote(event)}}>-</button>
            </section>
            <button onClick={(event) => (displayComments(event,article_id))}>show comments ({comment_count})</button>
        </section>
    </div>)
    )
}