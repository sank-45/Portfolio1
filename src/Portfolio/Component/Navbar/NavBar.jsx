import { Link } from 'react-router-dom';
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
                <Link to="/" className="navbar_logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="logo" />
                </Link>

                <div className="navbar_links">
                    <ul className={`${showNav ? "show" : ""}`}>
                        <li onClick={() => setShowNav(false)}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <Link to="/about">About</Link>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <Link to="/contact">Contact </Link>
                        </li>
                        
                    </ul>

                    <div className="navbar_phone">
                        <h3 className='dash'>|</h3>
                        <FaPhoneAlt />
                        <span>  +917249774554</span>
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