import jsLogo from '../../Assets/JavaScript-logo.png'
import SQLLogo from '../../Assets/Elephant-SQL.png'
import renderLogo from '../../Assets/Render-logo.png'

export const Home = () =>
{
    return(
        <div>
            <h1>Welcome to Nc-News!</h1>
            <div>
                Hello and welcome to Northcoders News! The function of this
                web-page is to act as a template for future personal web designs
                and an experimental page for me to test out concepts and newly learned
                functionality of react libraries and web development using JSX.
                All CSS, HTML and Javascript is made manually without templates in order for me to refine my skills as time goes on.
                 <p>
                    Click the links above to begin searching my website!   
                </p>
            </div>
            <div>
                <div>
                    <h1>This website was made with the following tech stack</h1>
                </div>
                <div>
                    <img src={jsLogo} alt="" id="JSLogo" className="Tech_Logo"/>
                    <img src={SQLLogo} alt="" id="ElephantLogo" className="Tech_Logo"/>
                    <img src={renderLogo} alt="" id="RenderLogo" className="Tech_Logo"/>
                </div>
            </div>
        </div>
    )
}