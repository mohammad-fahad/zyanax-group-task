import React from 'react'
import Carousel from 'react-elastic-carousel';
import img1 from '../../assets/26801830821918.png'
import img2 from '../../assets/26824312324126.png'
import img3 from '../../assets/Hair-Care.png'
import img4 from '../../assets/Image 117.png'

const img = [
    {
        i: img1
    },
    {
        i: img2
    },
    {
        i: img3
    },
    {
        i: img4
    },

]
function LatestBlogs() {
    return (
        <div className="container text-center my-5">
            <h3>LATEST BLOGS</h3>
            <h5>This is a place devoted to giving you deeper insight into the news, <br/>
                trends, people and technology behind Bing.</h5>

                <Carousel itemsToShow={1} className="my-5">
                    {
                        img.map((image, i) =>
                        <img src={image.i} style={{height:'45vh'}} key={i}/>
                        )
                    }
                
                </Carousel>
                
      
        </div>
    )
}

export default LatestBlogs
