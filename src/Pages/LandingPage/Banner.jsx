import React from 'react'

import BannerImg from '../../assets/Banner/MainBanner.jpeg'

function Banner() {
  return (
    <div className="Banner">
      <figure>
        <img src={BannerImg} alt="" />
        <figcaption>
          <p>New</p>
          <h1>Coming Soon : Bridal & Festive Saree</h1>
          <p>Sign Up Now <i class="bi bi-arrow-right-short"></i></p>
        </figcaption>
      </figure>
    </div>
  )
}

export default Banner