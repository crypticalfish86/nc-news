export const Body = (props) =>
{
    const body = props.body
    const img = props.img
    return(
        <div id="Single_Article_Body" className="Single_Article_Child">
            <section>
                <img src={img} alt="" id="Single_Article_Image"/>
                <p>{body}</p>
            </section>
        </div>
    )
}