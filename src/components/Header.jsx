import northcodersLogo from '../Assets/northcoders_logo.jpg'
import { useNavigate } from 'react-router-dom'

export const Header = () =>
{
    const navigate = useNavigate()

    function navHome(event)
    {
        event.preventDefault()
        navigate('/')
    }
    return(
        <div id="Header">
            <div id="Header_Image">
                <img onClick={(event) => navHome(event)} src={northcodersLogo} alt="Northcoders_Logo" id="Logo"/>
            </div>
            <div id="Header_Title">
                <h1>
                    Northcoders News
                </h1>
            </div>
        </div>
    )
}
