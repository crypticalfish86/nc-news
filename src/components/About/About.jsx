import jace from '../../Assets/IMG_5156.jpg'
import jsLogo from '../../Assets/JavaScript-logo.png'
import SQLLogo from '../../Assets/Elephant-SQL.png'
import renderLogo from '../../Assets/Render-logo.png'
import pythonLogo from '../../Assets/Python-Symbol.png'
import reactLogo from '../../Assets/React.png'
import typeScriptLogo from '../../Assets/TypeScript.png'
import django from '../../Assets/django.png'
import C from '../../Assets/C_Logo.png'

export const About = () =>
{
    return(
        <div id="About_Page">
            <h1 id="About_Title">Thanks for visiting!</h1>
            <p>
                Thankyou for visiting my website! I'm a trainee-fullstack developer thats hoping to begin a career in software development.
                Having just finished my bootcamp at northcoders i'm excited to begin my career in software development.
                <p>If you have come across my website you are likely either a close friend or potential employer, either way thankyou for taking the time to view my website.</p>
                <p>
                    Made by: Jace Weerawardena
                </p>
                
            </p>
            <div>
                <img src={jace} alt="Picture of web developer" id="Jace"/>
                <h1>
                    current technical experience
                </h1>
                <div>
                    <img src={jsLogo} alt="Javascript" id="JSLogo" className="Tech_Logo"/>
                    <img src={typeScriptLogo} alt="TypeScript" id="TSLogo" className="Tech_Logo"/>
                    <img src={pythonLogo} alt="Python" id="PythonLogo" className="Tech_Logo"/>
                    <img src={C} alt="C" id="RenderLogo" className="Tech_Logo"/>
                    <img src={reactLogo} alt="React" id="ReactLogo" className="Tech_Logo"/>
                    <img src={SQLLogo} alt="PSQL" id="ElephantLogo" className="Tech_Logo"/>
                    <img src={django} alt="Django" id="DjangoLogo" className="Tech_Logo"/>
                    <img src={renderLogo} alt="Render" id="RenderLogo" className="Tech_Logo"/>

                </div>
            </div>

        </div>
    )
}