import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Sidenav from './Sidenav';

function Header() {
    const [isSideNavOpen, setSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setSideNavOpen(!isSideNavOpen);
    };

    return (
        <header>
            <div className="container">
                <div className="Logo">
                    <Link to="/"><p>Patukey</p></Link>
                </div>
                <Sidenav isOpen={isSideNavOpen} onClose={toggleSideNav} />
                <div className="Icons">
                    <div className="Search-Icon">
                        <input type="search" name="" id="" placeholder='Search . . .' />
                    </div>
                    <div className="Love">
                        <i class="bi bi-heart"></i>
                        <span>08</span>
                    </div>
                    <div className="Cart">
                        <i class="bi bi-bag"></i>
                        <span>03</span>
                    </div>
                    <div className="Login">
                        <Link to="/LogIn">LOGIN</Link>
                    </div>
                </div>
                <div className="MenuIcon" onClick={toggleSideNav} id="Side-Nav-Open">
                    <i class="bi bi-list"></i>
                </div>
            </div>
        </header>

    )
}

export default Header