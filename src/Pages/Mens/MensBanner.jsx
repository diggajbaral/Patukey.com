import React from 'react'

import Banner1 from '../../assets/Tranding Style/TrendingBanner_01.jpg'
import Banner2 from '../../assets/Tranding Style/TrendingBanner_02.jpg'


function MensBanner() {
    return (
        <div className="MensBanner Main-Margin /// container">
            <div className="row">
                <div className="col-lg-6">
                    <figure>
                        <img src={Banner1} alt="" />
                        <figcaption>
                            <h3>Vallentine</h3>
                            <p>Bedazzling Styls To Rock Festivities</p>
                            <button>Shop Now</button>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-lg-6">
                    <figure>
                        <img src={Banner2} alt="" />
                        <figcaption>
                            <h3>Dashain Special</h3>
                            <p>Bedazzling Styls To Rock Festivities</p>
                            <button>Shop Now</button>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default MensBanner