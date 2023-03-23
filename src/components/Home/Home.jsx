import jsLogo from '../../Assets/JavaScript-logo.png'
import SQLLogo from '../../Assets/Elephant-SQL.png'
import renderLogo from '../../Assets/Render-logo.png'
import reactLogo from '../../Assets/React.png'

export const Home = () =>
{
    return(
        <div>
            <h1 id="Welcome_Title">Welcome to Nc-News!</h1>
            <div id="Welcome_Paragraph">
                Hello and welcome to Northcoders News! The function of this
                web-page is to act as a template for future personal web designs
                and an experimental page for me to test out concepts and newly learned
                functionality of react libraries and web development using JSX.
                You may notice certain things changing as you visit this website overtime
                as I am attempting to consistently improve my html and css abilities.
                 <p>
                    Click the links above to begin searching my website!   
                </p>
            </div>
            <div>
                <div>
                    <h1>This website was made with the following tech stack</h1>
                </div>
                <div>
                    <img src={jsLogo} alt="" className="Tech_Logo"/>
                    <img src={SQLLogo} alt="" className="Tech_Logo"/>
                    <img src={renderLogo} alt="" className="Tech_Logo"/>
                    <img src={reactLogo} alt="" className="Tech_Logo"/>
                </div>
            </div>
        </div>
    )
}