import { useNavigate } from "react-router-dom"
import jace from '../../Assets/IMG_5156.jpg'
export const StartupPage = () =>
{
    const navigate = useNavigate()

    function navArticles(event)
    {
        event.preventDefault()
        navigate('/articles')
    }

    return(
        <div id="Startup_Page">
            <p>
                Hello and welcome to Northcoders News! The function of this
                web-page is to act as a template for future personal web designs
                and an experimental page for me to test out concepts and newly learned
                functionality of react libraries and web development using JSX. Click the button below
                to begin searching my website!
                <p>
                    Made by: Jace Weerawardena
                </p>
            </p>
            <img src={jace} alt="" id="Jace"/>
            <div>
                <button onClick={(event) => {navArticles(event)}}>Click here to start browsing!</button>
            </div>

        </div>
    )
}