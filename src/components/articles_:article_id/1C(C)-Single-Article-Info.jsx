import { useState, useEffect } from "react"
import { getSingleArticleComments, patchSingleArticleVotes, postSingleArticleComment } from "../../utils"
import { SingleArticleComments } from "./1D(A)-Single-Article-Comments"

export const ArticleInfo = (props) =>
{
    const article_id = props.article_id

    const comment_count = props.comment_count
    const [displayCommentBool, setDisplayCommentBool] = useState(false)
    const [currentComments, setComments] = useState([])
    function displayComments(event)
    {
        event.preventDefault()
        setDisplayCommentBool(true)
        getSingleArticleComments(article_id)
        .then(({ data }) =>
        {
            setComments(data)
        })
    }
    function hideComments(event)
    {
        event.preventDefault()
        setDisplayCommentBool(false)
    }


    const [commentBoxValue, setCommentBoxValue] = useState("click here to add comment")
    function resetBox(event)
    {
        event.preventDefault()
        setCommentBoxValue("")
        
    }
    function logTextBox(event)
    {
        event.preventDefault()
        setCommentBoxValue(event.target.value)
    }
    function disableRefresh(event)
    {
        event.preventDefault()
    }
    function postComment(event, commentBody)
    {
        event.preventDefault()
        postSingleArticleComment(article_id, commentBody)
        .then(({ data }) =>
        {
            setComments([data, ...currentComments])
        })
    }

    
    const [upVoteBool, setUpvoteBool] = useState(false)
    const [downVoteBool, setdownvoteBool] = useState(false)
    let votes = props.votes
    const [voteValue, setVoteValue] = useState(0)
    useEffect(() => {setVoteValue(votes)}, [votes]) 

    function upVote(event)
    {
        event.preventDefault()
        if(upVoteBool)
        {

            setUpvoteBool(false)
            setVoteValue((voteValue) => voteValue - 1) 
            patchSingleArticleVotes(article_id, -1) 
        }
        else
        {
            if(downVoteBool)
            {
                setUpvoteBool(true)
                setdownvoteBool(false)
                setVoteValue((voteValue) => voteValue + 2) 
                patchSingleArticleVotes(article_id, 2) 
            }
            else
            {
                setUpvoteBool(true)
                setVoteValue((voteValue) => voteValue + 1) 
                patchSingleArticleVotes(article_id, 1) 
            }
        }

    }
    function downVote(event)
    {
        event.preventDefault()
        if(downVoteBool)
        {
            setdownvoteBool(false)
            setVoteValue((voteValue) => voteValue + 1) 
            patchSingleArticleVotes(article_id, 1) 
        }
        else
        {
            if(upVoteBool)
            {
                setdownvoteBool(true)
                setUpvoteBool(false)
                setVoteValue((voteValue) => voteValue - 2) 
                patchSingleArticleVotes(article_id, -2) 
            }
            else
            {
                setdownvoteBool(true)
                setVoteValue((voteValue) => voteValue - 1) 
                patchSingleArticleVotes(article_id, -1) 
            }
        }
    }


    return(
        displayCommentBool?
        (<div id="Single_Article_Info" className="Single_Article_Child">
        <section>
            <section id="Voting">
                <p>votes:{voteValue}</p>
                <div>
                    <button id="Up_Vote" className="Vote_button" onClick={(event) => {upVote(event)}}>+</button>
                    <button id="Down_Vote" className="Vote_Button" onClick={(event) => {downVote(event)}}>-</button>
                </div>
            </section>
            <button id="Show_Comments_Button" onClick={(event) => {hideComments(event)}}>hide comments</button>
            <section id="Comments_Section">
                <section id="Post_New_Comment_Area">
                    <form onSubmit={(event) => {disableRefresh(event)}}>
                       <input type="text" onClick={(event) => {resetBox(event)}} onChange={(event) => {logTextBox(event)}} id="Comment_Text_Box" value={commentBoxValue}/>
                    </form>
                    <button onClick={(event) => {postComment(event, commentBoxValue)}}>Submit Comment</button>
                </section>
                <section id="Posted_Comments">
                    {currentComments.map((comment) => {return(<SingleArticleComments comment={comment}/>)})}
                </section>
            </section>

        </section>
    </div>)
        :
        (<div id="Single_Article_Info" className="Single_Article_Child">
        <section>
            <section id="Voting">
                <p>votes:{voteValue}</p>
                <div>
                    <button id="Up_Vote" className="Vote_button" onClick={(event) => {upVote(event)}}>+</button>
                    <button id="Down_Vote" className="Vote_Button" onClick={(event) => {downVote(event)}}>-</button>
                </div>
            </section>
            <button onClick={(event) => (displayComments(event))}>show comments ({comment_count})</button>
        </section>
    </div>)
    )
}