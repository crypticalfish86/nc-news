export const Body = (props) =>
{
    const body = props.body
    const img = props.img
    const author = props.author
    return(
        <div id="Single_Article_Body" className="Single_Article_Child">
                <img src={img} alt="" id="Single_Article_Image"/>
                <div id="Body_Text">
                    <p>{body}</p>
                    <p>by: {author}</p>
                </div>
        </div>
    )
}