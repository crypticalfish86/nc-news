import { SeeAlsoTitle } from "./2C(A)-See-Also-Title"
import { SeeAlsoArticles } from "./2C(B)-See-Also-Articles"

export const SeeAlso = (props) =>
{
    const topic = props.topic
    return(
        <div id="See_Also">
            <SeeAlsoTitle />
            <SeeAlsoArticles topic={topic}/>
        </div>
    )
}