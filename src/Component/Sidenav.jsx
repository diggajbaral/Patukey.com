import React from 'react'
import { Link } from "react-router-dom";

function Sidenav({ isOpen, onClose }) {
    return (
        <nav id='MenuItems' className={isOpen ? 'Show-Nav' : ''}>
            <ul>
                <li><Link to="/Mens">Mens</Link></li>
                <li><a href="#">Saree</a></li>
                <li><a href="#">Kurtha</a></li>
                <li>Bridal <i class="bi bi-chevron-compact-down"></i></li>
                <li>Festival <i class="bi bi-chevron-compact-down"></i></li>
                <li className='LogIn-Nav'><Link to="/LogIn">LogIn / SignUp <i class="bi bi-arrow-right-short"></i></Link></li>
            </ul>
        </nav>
    )
}

export default Sidenav