import React from 'react'
import LatestBlogs from '../../Blogs/LatestBlogs'
import Footer from '../../Footer/Footer'
import Promo from '../../Promo/Promo'
import Body from '../Body/Body'
import Header from '../Header'

function Home() {
    return (
        <div>
           <Header />
           <Body />
           <LatestBlogs />
           <Promo />
           <hr className="my-5"/>
           <Footer />
        </div>
    )
}

export default Home
