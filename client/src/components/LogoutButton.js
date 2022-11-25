import { useNavigate } from 'react-router-dom';
import logoutPic from "../images/logout.png"


const LogoutButton = ({setUser}) => {

    const navigate = useNavigate()
    const handleClick = async () => {
        const res = await fetch("/logout/", {
            method: "POST"
        })
        const data = await res.json()
        setUser(null)
        navigate("/")
    }

    return (
        <>
       
            <a href="#" className="login-logout-button" onClick={handleClick}>
                <img className="icon-logout" src={logoutPic} />
            </a>
       
        </>
    )
}

export default LogoutButton