import React from 'react'

function Footer() {
    return (
        <footer className='Main-Margin'>
            <div className="container">
                <div className="Footer-Topic">
                    <div className="wrapper">
                        <h3>P A T U K E Y</h3>
                        <p>Saree & Kurtha</p>
                    </div>
                </div>
                <div className="Middle-Footer Main-Margin">
                    <div className="QuickLinks">
                        <p>MORE INFO</p>
                        <p>SELL YOUR PRODUCTS</p>
                        <p>TERM & CONDITION</p>
                    </div>
                    <div className="SocialLinks">
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                    <div className="QuickLinks">
                        <p>SHIPPING INFO</p>
                        <p>RETURNS / EXCHANGES</p>
                        <p>CONATCT</p>
                    </div>
                </div>
                <div className="Topic">
                    <h4>WEEKLY NEWSLETTER</h4>
                </div>
                <div className="NewLetter">
                    <form action="">
                        <input type="email" name="" id="" placeholder='Your Email address . . .' />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
                <div className="CopyRight">
                    <p>© 2024 Patukey.com. All rights reserved</p>
                    <p><a href="linkedin.com/in/diggaj/">Creator ~ Diggaj Baral</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer