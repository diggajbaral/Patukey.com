import React from 'react'
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
import { Link } from "react-router-dom";


function Error() {
    return (
        <>
            <Header />

            <div className="Error Main-Margin /// container">
                <div className="row">
                    <div className="Message col-lg-6">
                        <h1>Something's wrong here . . .</h1>
                        <p>We can't find the page you're looking for. Check out Log In or head back to Home</p>
                        <div className="Quick-Button">
                            <button><Link to="/LogIn">LOGIN</Link></button>
                            <button><Link to="/">HOME</Link></button>
                        </div>
                    </div>
                    <div className="Question col-lg-6">
                        <h1>? ? ?</h1>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Error