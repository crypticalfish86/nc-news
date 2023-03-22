import northcodersLogo from '../Assets/northcoders_logo.png'
import magnifyingGlass from '../Assets/magnifying_glass.png'
import { useNavigate, Link } from 'react-router-dom'

export const Header = () =>
{
    const navigate = useNavigate()

    function navHome(event)
    {
        event.preventDefault()
        navigate('/')
    }
    return(
        <div>
            <div id="Header">
                <img onClick={(event) => navHome(event)} src={northcodersLogo} alt="Northcoders_Logo" id="Logo"/>
                <div id="Header_Title">
                    Northcoders News
                </div>
                <img src={magnifyingGlass} alt="Northcoders_Logo" id="Logo"/>
        </div>
            <div id="Header_Link_Box">
                <Link className='Header_Link' to={'/'}>home</Link>
                <Link className='Header_Link' to={'/articles'}>search</Link>
                <Link className='Header_Link' to={'/about'}>about</Link>                
            </div>
        </div>
        
    )
}
