import React from 'react'

import Categories1 from "../../assets/Categories/Categories1.avif"
import Categories2 from "../../assets/Categories/Categories2.avif"
import Categories3 from "../../assets/Categories/Categories3.avif"
import Categories4 from "../../assets/Categories/Categories4.avif"


function Categories() {
    return (
        <div className="CategoriesList Main-Margin /// container">
            <div className="Categories">
                <figure>
                    <img src={Categories1} alt="" />
                    <figcaption>
                        <p>Instant Saree</p>
                        <button>Shop Now</button>
                    </figcaption>
                </figure>
            </div>
            <div className="Categories">
                <figure>
                    <img src={Categories2} alt="" />
                    <figcaption>
                        <p>Indo Fusion</p>
                        <button>Shop Now</button>
                    </figcaption>
                </figure>
            </div>
            <div className="Categories">
                <figure>
                    <img src={Categories3} alt="" />
                    <figcaption>
                        <p>Chikankari Sarees</p>
                        <button>Shop Now</button>
                    </figcaption>
                </figure>
            </div>
            <div className="Categories">
                <figure>
                    <img src={Categories4} alt="" />
                    <figcaption>
                        <p>Co-ord Classics</p>
                        <button>Shop Now</button>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Categories