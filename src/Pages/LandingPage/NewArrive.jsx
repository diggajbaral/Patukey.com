import React from 'react'

import NewArrive1 from "../../assets/New Arrrivals/NewArrive_01.avif"
import NewArrive2 from "../../assets/New Arrrivals/NewArrive_02.avif"

function NewArrive() {
    return (
        <div className="NewArrive">
            <div className="container">
                <div className="row">
                    <div className="Figure col-lg-4">
                        <img src={NewArrive1} />
                    </div>
                    <div className="Text col-lg-4">
                        <h1>New Arrivals</h1>
                        <p>Latest Saree Blouse Designs and Patterns Online</p>
                        <button>Show Now</button>
                    </div>
                    <div className="Figure col-lg-4">
                        <img src={NewArrive2} alt="Blouse Design 2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrive