import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

import MensCategories from './MensCategories.jsx'
import MensProduct from './MensProduct.jsx'


function Mens() {
    return (
        <>
            <Header />

            <div className="Offer /// container">
                <p>Attention, gentlemen! Enjoy 35% off our exclusive men's collection. From sleek suits to casual wear, enhance your style now!</p>
            </div>

            <MensCategories />

            <div className="Topic">
                <p>Mens Trending Styles</p>
            </div>

            <MensProduct />
            <MensProduct />
            <MensProduct />


            <Footer />
        </>
    )
}

export default Mens