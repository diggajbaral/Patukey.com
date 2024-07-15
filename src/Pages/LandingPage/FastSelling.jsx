import React from 'react'

import FastSelling1 from "../../assets/Fast Selling/FastSelling1.avif"
import FastSelling2 from "../../assets/Fast Selling/FastSelling2.avif"
import FastSelling3 from "../../assets/Fast Selling/FastSelling3.avif"
import FastSelling4 from "../../assets/Fast Selling/FastSelling4.avif"


function FastSelling() {
    return (
        <div className="FastSelling Main-Margin">
            <div className="container">
                <div className="PopularCard">
                    <figure>
                        <img src={FastSelling1} alt="" />
                    </figure>
                    <figcaption>
                        <p>White Chiffon Palazzo With Embroidered CropTop And Jacket</p>
                        <p>$ 149.00</p>
                    </figcaption>
                    <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>
                </div>
                <div className="PopularCard">
                    <figure>
                        <img src={FastSelling2} alt="" />
                    </figure>
                    <figcaption>
                        <p>Blue Printed Cotton Kurta Set</p>
                        <p>$ 79.00</p>
                    </figcaption>
                    <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>
                </div>
                <div className="PopularCard">
                    <figure>
                        <img src={FastSelling3} alt="" />
                    </figure>
                    <figcaption>
                        <p>Beige Resham Threadwork Embroiderd Kurti Pant Set In Organza</p>
                        <p>$ 179.00</p>
                    </figcaption>
                    <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>
                </div>
                <div className="PopularCard">
                    <figure>
                        <img src={FastSelling4} alt="" />
                    </figure>
                    <figcaption>
                        <p>Yellow Embroidered Crop Top And Dhoti With Jacket</p>
                        <p>$ 159.00</p>
                    </figcaption>

                    <button><i class="bi bi-heart UnLike"></i> <i class="bi bi-heart-fill Liked"></i></button>

                </div>
            </div>
        </div>
    )
}

export default FastSelling