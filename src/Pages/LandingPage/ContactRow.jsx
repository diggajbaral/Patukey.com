import React from 'react'

function ContactRow() {
    return (
        <div className="ContactRow Main-Margin /// container">
            <figure>
                <img src="https://img.freepik.com/premium-photo/portrait-beautiful-woman-traditional-ethnic-pakistani-bridal_121764-739.jpg?w=1380" alt="" />
                <figcaption>
                    <h3>The Ultimate In-Store Experience Via 24x7 Video Shopping</h3>
                    <p>Our Stylists On Call Can Speak: Nepali, English & Hindi</p>
                    <form action="">
                        <input type="number" name="" id="" placeholder='Phonenumber . . .'/>
                        <button type="submit"><i class="bi bi-camera-video"></i> Call Now</button>
                    </form>
                </figcaption>
            </figure>
        </div>
    )
}

export default ContactRow