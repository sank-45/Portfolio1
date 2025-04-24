import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import Logo from "../../Component/Assets/logo1.png";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar_container wrapper">
                <NavLink to="/" className="navbar_logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="logo" />
                </NavLink>

                <div className="navbar_links">
                    <ul className={`${showNav ? "show" : ""}`}>
                        <li onClick={() => setShowNav(false)}>
                            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                        </li>
                    </ul>

                    <div className="navbar_phone">
                        <h3 className='dash'>|</h3>
                        <FaPhoneAlt />
                        <span> +917249774554</span>
                    </div>

                    <div className="navbar_menu" onClick={() => setShowNav(!showNav)}>
                        {showNav ? <IoMdClose /> : <IoMenuSharp />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
