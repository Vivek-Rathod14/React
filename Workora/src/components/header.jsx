import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div><header>
            <nav class="navbar">
                <h2 class="logo">Workora</h2>

                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><Link to="/work">Work </Link></li>
                    <li><Link to="/postWork">Post Work</Link></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button class="login-btn">Login</button>
            </nav>
        </header></div>
    )
}

export default Header