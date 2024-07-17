import React from 'react'

import Product01 from '../../assets/Tranding Style/Trending_01.avif'
import Product02 from '../../assets/Tranding Style/Trending_02.avif'
import Product03 from '../../assets/Tranding Style/Trending_03.avif'
import Product04 from '../../assets/Tranding Style/Trending_04.avif'
import ProductBanner01 from '../../assets/Tranding Style/TrendingBanner_01.jpg'
import ProductBanner02 from '../../assets/Tranding Style/TrendingBanner_02.jpg'


function TrendingStyle() {
    return (
        <>
            <div className="TrendingStyle Main-Margin">
                <div className="container">
                    <div className="PopularCard">
                        <figure>
                            <img src={Product01} alt="" />
                        </figure>
                        <figcaption>
                            <p>Black And Gold Banarasi Tunchui Silk Saree With Unstitched Blouse Piece</p>
                            <p>$ 415.00</p>
                        </figcaption>
                        <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>
                    </div>
                    <div className="PopularCard">
                        <figure>
                            <img src={Product02} alt="" />
                        </figure>
                        <figcaption>
                            <p>Lilac Crushed Shimmer Lehenga With Blouse And Cape</p>
                            <p>$ 385.00</p>
                        </figcaption>
                        <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>
                    </div>
                    <div className="PopularCard">
                        <figure>
                            <img src={Product03} alt="" />
                        </figure>
                        <figcaption>
                            <p>Bottle Green Pre Stitched Frill Saree With Blouse</p>
                            <p>$ 426.00</p>
                        </figcaption>
                        <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>
                    </div>
                    <div className="PopularCard">
                        <figure>
                            <img src={Product04} alt="" />
                        </figure>
                        <figcaption>
                            <p>Copper Brown Kurta With Embroidered Jacket And Dhoti</p>
                            <p>$ 225.00</p>
                        </figcaption>

                        <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>

                    </div>
                </div>
            </div>
            <div className="TrendingStyle-Banner container Main-Margin">
                <div className="row">
                    <div className="col-lg-6">
                        <figure>
                            <img src={ProductBanner01} alt="" />
                            <figcaption>
                                <h3>Print Paradise</h3>
                                <p>Bedazzling Styls To Rock Festivities</p>
                                <button>Shop Now</button>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img src={ProductBanner02} alt="" />
                            <figcaption>
                                <h3>Ram Navami Special</h3>
                                <p>Bedazzling Styls To Rock Festivities</p>
                                <button>Shop Now</button>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}



export default TrendingStyle