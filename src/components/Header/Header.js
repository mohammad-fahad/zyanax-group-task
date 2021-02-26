import React from 'react'
import search from '../../assets/loupe.png'

function Header() {
    return (
        <div className="my-5">
            <div className="d-flex ">
            <h5 className="text-muted mr-5">Home Page</h5>
            <h5>All Products</h5>
            </div>
            <div>
            <hr className="text-muted"/>
                <div className="d-flex flex-wrap py-4">
                    <p className="mr-5">Showing 1 – 40 of 80,068 products</p>
                    <p><strong>Refine by </strong></p>
                     <span className="mx-3">|</span>
                    <p>Price </p>
                    {/* <i className="icon-collapse"></i>  */}
                    <p className="ml-5"><strong>Sort By</strong></p>
                    <span className="mx-3">|</span>
                    <p>Best Seller</p>
                   <div className="col-md-3 ml-auto">
                       
                   <input type="text" placeholder="Search" className="form-control py-3 bg-light"  style={{position: 'relative'}}/>
                   <img src={search} style={{position: 'absolute', marginTop: '-3vh', height: '50%', marginLeft: '19.3vw'}} alt=""/>
                   </div>

                </div>

            <hr className="text-muted"/>
            </div>
            
        
        </div>
    )
}

export default Header
