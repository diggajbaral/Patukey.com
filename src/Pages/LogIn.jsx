import React, { useEffect } from 'react';
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
function LogIn() {
    useEffect(() => {
        document.body.classList.add('Change-Background');
        return () => {
            document.body.classList.remove('Change-Background');
        };
    }, []);
    return (
        <>
            <Header />
            <div className="LogIn Main-Margin /// container">
                <div className="row">
                    <div className="Text col-lg-6">
                        <h1>Patukey</h1>
                        <p>Stay connected with us to enhance your shopping experience.</p>
                    </div>
                    <div className="LogIn-Form col-lg-6">
                        <form action="">
                            <input type="email" name="" id="" placeholder='Email or Phone number' />
                            <input type="password" name="" id="" placeholder='Password' />
                            <p>Forget Password</p>
                            <div className="Buttons">
                                <button>LOGIN</button>
                                <button>SIGNUP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LogIn