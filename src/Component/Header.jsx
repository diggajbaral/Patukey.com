import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="Logo">
                    <Link to="/"><p>Patukey</p></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/Mens">Mens</Link></li>
                        <li><a href="#">Saree</a></li>
                        <li><a href="#">Kurtha</a></li>
                        <li><a href="#">Bridal <i class="bi bi-chevron-compact-down"></i></a></li>
                        <li><a href="#">Festival <i class="bi bi-chevron-compact-down"></i></a></li>
                    </ul>
                </nav>
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
            </div>
        </header>

    )
}

export default Header