import northcodersLogo from '../Assets/northcoders_logo.png'
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
        <div id="Header">
            <img onClick={(event) => navHome(event)} src={northcodersLogo} alt="Northcoders_Logo" id="Logo"/>
            <div id="Header_Image_And_Title">
                <div id="Header_Title">
                    <h1>
                        Northcoders News
                    </h1>
                </div>
                <div id="Header_Nav">
                    <Link className='Header_Link' to={'/'}>home</Link>
                    <Link className='Header_Link' to={'/articles'}>search</Link>
                    <Link className='Header_Link' to={'/about'}>about</Link>
                </div>
            </div>

        </div>
    )
}
