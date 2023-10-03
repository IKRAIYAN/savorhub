import { Link,  NavLink } from "react-router-dom"
import "./navbar.css"
import Logo from "../images/savorhub-logo.png"
import { links } from "../data"
import { FaBars } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"
import { useState } from "react"

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)

    return (
        <nav>
            <div className="container nav_container">
                <Link className="logo" to="/">
                    <img src={Logo} alt="Savorhub" onClick={() => setIsNavShowing(false)}/>
                </Link>
                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'} `}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) => isActive ? 'active-nav' : ''}
                                        onClick={() => setIsNavShowing(prev => !prev)}>
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar