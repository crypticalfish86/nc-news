import axios from 'axios'

const articleApi = axios.create({baseURL: "https://jaces-nc-news.onrender.com"})

export const getAllArticles = (topic, sortby, order) =>
{
    if(!topic)
    {
        topic = ""
    }
    if(!sortby)
    {
        sortby = ""
    }
    if(!order)
    {
        order = ""
    }
    return articleApi.get(`/api/articles?topic=${topic}&sort_by=${sortby}&order=${order}`)
    .then((data)=> {return data})
}

export const getSingleArticle = (article_id) =>
{
    return articleApi.get(`/api/articles/${article_id}`)
}

export const getSingleArticleComments = (article_id) =>
{
    return articleApi.get(`/api/articles/${article_id}/comments`)
}

export const patchSingleArticleVotes = (article_id, voteValue) =>
{
    const voteBody = {inc_votes : voteValue}
    return articleApi.patch(`/api/articles/${article_id}`, voteBody)
}

export const postSingleArticleComment = (article_id, commentBody) =>
{
    const requestCommentBody = {username : "tickle122", body : commentBody}
    return articleApi.post(`/api/articles/${article_id}/comments`, requestCommentBody)
}