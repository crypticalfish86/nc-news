import axios from 'axios'

const articleApi = axios.create({baseURL: "https://jaces-nc-news.onrender.com"})

export const getAllArticles = () =>
{
    return articleApi.get("/api/articles")
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