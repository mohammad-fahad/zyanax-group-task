import React from 'react'
import heart from '../../assets/heart.jpg'
import brand from '../../assets/brand.jpg'
import fast from '../../assets/fast.jpg'
import secure from '../../assets/secure.jpg'
import pro from '../../assets/pro.jpg'


const promo = [
    {
        img: heart,
        name: 'Global Brands',
        description: "Buy you favorite items from your favorite global brands"
    },
    {
        img: brand,
        name: 'Fast Delivery',
        description: "Fast and convenient       door to door delivery"
    },
    {
        img: fast,
        name: 'Quality and Saving',
        description: "Comprehensive quality     control and affordable prices"
    },
    {
        img: secure,
        name: 'Quality and Saving',
        description: "Comprehensive quality     control and affordable prices"
    },
    {
        img: pro,
        name: 'Quality and Saving',
        description: "Comprehensive quality     control and affordable prices"
    },
]
function Promo() {
    return (
        <div className=" container">
            <div className="row justify-content-between text-center" >
            {
                promo.map((adds, i) => 
                    <div className="col-md-2">
                        
                    <img src={adds.img} className="w-50" alt="" key={i} />
                    <h5>{adds.name}</h5>
                    <h6>{adds.description}</h6>
                    </div>
                   
                )
            }
             </div>
        </div>
    )
}

export default Promo
