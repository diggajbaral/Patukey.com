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
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">SIGNUP</button>
                                {/* Modal  */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Patukey ~ Join our community . . .</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body Modal-Form">
                                                <form action="">
                                                    <div className="Form-Name">
                                                        <input type="text" name="" id="" placeholder='First Name' required/>
                                                        <input type="text" name="" id="" placeholder='Last Name' required/>
                                                    </div>
                                                    <input type="text" name="" id="" placeholder='Email or Phone number' required/>
                                                    <input type="password" name="" id="" placeholder='Password' required/>
                                                    <div className="Age-Gender">
                                                        <input type="date" name="" id="" />
                                                        <select id="gender" name="gender" required>
                                                            <option value="" disabled selected>Select your gender</option>
                                                            <option value="female">Female</option>
                                                            <option value="male">Male</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">SIGN UP</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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