import React from 'react'

import Grid1 from "../../assets/Grid Gallery/Grid_01.avif"
import Grid2 from "../../assets/Grid Gallery/Grid_02.avif"
import Grid3 from "../../assets/Grid Gallery/Grid_03.avif"
import Grid4 from "../../assets/Grid Gallery/Grid_04.avif"

function GridGallery() {
    return (
        <div className="GridSection Main-Margin">
            <div className="container">
                <div className="row">
                    <div className="GridImage col-lg-6">

                        <img src={Grid1} alt="" />
                        <img src={Grid2} alt="" />
                        <img src={Grid3} alt="" />
                        <img src={Grid4} alt="" />
                        
                    </div>
                    <div className="GridText col-lg-6">
                        <h3>Season's Newest WOW-worthy Styles</h3>
                        <p>Resort Print Edit</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridGallery