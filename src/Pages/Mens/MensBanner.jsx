import React from 'react'

import Banner1 from '../../assets/Tranding Style/TrendingBanner_01.jpg'
import Banner2 from '../../assets/Tranding Style/TrendingBanner_02.jpg'


function MensBanner() {
    return (
        <div className="MensBanner Main-Margin /// container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={Banner1} alt="" />
                </div>
                <div className="col-lg-6">
                    <img src={Banner2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MensBanner