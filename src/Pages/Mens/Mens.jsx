import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

import MensProduct from './MensProduct'
import MensBanner from './MensBanner'
import MensCategories from './MensCategories'


function Mens() {
    return (
        <>
            <Header />

            <div className="Offer /// container">
                <p>Attention, gentlemen! Enjoy 35% off our exclusive men's collection. From sleek suits to casual wear, enhance your style now!</p>
            </div>

            <MensCategories />

            <MensBanner />

            <MensProduct />

            <Footer />
        </>
    )
}

export default Mens