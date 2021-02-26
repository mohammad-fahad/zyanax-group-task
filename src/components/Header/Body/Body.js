import React from 'react'
import { Button, Pagination } from 'react-bootstrap'
import Collapsible from 'react-collapsible';
import Products from '../Products/Products'
import fakeData from '../../FakeData/fakeData'
import Countries from '../../FakeData/Countries'
import Brands from '../../FakeData/Brands'
import Discount from '../../FakeData/Discount'
import { Scrollbars } from 'rc-scrollbars';
import TextsWithRadioBtn from '../../ReusableComponents/TextsWithRadioBtn';
import Fabric from '../../FakeData/Fabric';
import Pattern from '../../FakeData/Pattern';
import Services from '../../FakeData/Services';
import '../../../Style/style.scss'
import search from '../../../assets/loupe.png'


function Body() {
    const number = [{n:1}, {n:2}, {n:3}, {n:4}, {n:5}, {n:6}, {n:7}, {n:8}, {n:9}, {n:10}]

    return (
        <div>
            <div id="first-row" className="row">
                <div className="col-md-3" >
                    <div className="border p-3 left-section">
                        <div className="dashed pb-4">
                        <h6><strong>Filters</strong></h6>
                        <p className="text-muted border p-2 w-50 text-center radius" >Out of Stock</p>
                        <p className="text-muted border p-2 w-50 text-center radius" >Size: XL</p>
                        <Button variant="outline-success w-50 text-center radius" >Clear All</Button>
                        <br/>
                        </div>
                                            
                        <div className="my-4 d-flex justify-content-between dashed">
                       <strong className="pointer">
                       <Collapsible trigger="Category"  className="my-3 pointer"> 
                        
                        <p className='pl-1'>Men's Clothing</p>
                        <div className="d-flex justify-content-between">
                        <Collapsible trigger="Casual Wear" className="pl-2">
                            <p className='pl-3'>Shirts</p>
                        </Collapsible>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                            </div>  
                        </Collapsible>
                       </strong>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>   
                        </div>
                        <div className="mb-4 dashed">
                        <strong className="pointer">
                        <Collapsible trigger="Brand" className="py-3">
                           
                           <Scrollbars style={{ width: 380, height: 400}}>
                           <div className="my-3 px-4">
                           <input type="text" className="form-control my-1" placeholder="Search by brands" style={{position: "relative"}}/>
                           <img src={search} style={{position: 'absolute', marginTop: '-3vh',  marginLeft: '15.6vw'}} alt=""/>
                           </div>
                           {
                                   Brands.map((brand, i) => 
                                   <TextsWithRadioBtn data={brand} i={i} />
                                  
                                   )
                               }
                               </Scrollbars>                     
                                <h5 className="text-success py-3"><strong>236 MORE</strong></h5>

                        </Collapsible>
                        </strong>
                        </div>
                        <div  className="mb-4 dashed">
                        <strong style={{cursor:'pointer'}}>
                        <Collapsible trigger="Countries" className="py-3">                           
                           <Scrollbars style={{ width: 380, height: 250}}>
                           {
                                   Countries.map((country, i) => 
                                    <TextsWithRadioBtn data={country} i={i} />
                                   )
                               }
                               </Scrollbars>                     
                                <h5 className="text-success py-3"><strong>2 MORE</strong></h5>

                        </Collapsible>
                        </strong>
                        </div>
                        <div  className="mb-4 dashed">
                       <strong style={{cursor:'pointer'}}>
                       <Collapsible trigger="Size" className="py-3">
                            <div className="row text-center py-3">
                                <div className="col-md-2 border"><h6>XS</h6></div>
                                <div className="col-md-2 border"><h6>S</h6></div>
                                <div className="col-md-2 border">
                                    <h6>M</h6>
                                </div>
                                <div className="col-md-2 border">
                                <h6>L</h6>
                                </div>
                                <div className="col-md-2 border">
                                <h6>XL</h6>
                                </div>
                                <div className="col-md-2 border">
                                <h6>XXL</h6>
                                </div>
                            </div>
                        </Collapsible>   
                       </strong>
                        </div>
                        <div  className="mb-4 dashed">
                      <strong style={{cursor:'pointer'}}>
                      <Collapsible trigger="Color" className="py-3">
                            <div className="row text-center py-3">
                                <div className="col-md-2 col-sm-2 col-xs-2 border p-3" style={{backgroundColor:"black"}}></div>
                                <div className="col-md-2 col-sm-2 col-xs-2 border" style={{backgroundColor:"#6F3E18"}}></div>
                                <div className="col-md-2 col-sm-2 col-xs-2 border" style={{backgroundColor:"#D4BE8D"}}>                                    
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2 border" style={{backgroundColor:"#838383"}}>                                
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2 border" style={{backgroundColor:"white"}}>                                
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2 border" style={{backgroundColor:"#0F73AD"}}>
                               
                                </div>
                            </div>
                        </Collapsible>  
                        </strong> 
                        </div>
                        <div  className="mb-4 dashed">
                        <strong style={{cursor:'pointer'}}>
                        <Collapsible trigger="Discount" className="py-3">                           
                           <Scrollbars style={{ width: 380, height: 150}}>
                           <div className="my-3">
                               {
                                   Discount.map((d, i) =><TextsWithRadioBtn data={d} i={i} />)
                               }
                                        
                                    </div>
                               </Scrollbars>           
                            
                        </Collapsible>
                        </strong>
                        
                        </div>
                        <div  className="mb-4 dashed">
                            <h6 className="side-font">Price</h6>
                            <div className="d-flex flex wrap pb-5 container">
                                <input type="text" className="form-control w-25" placeholder="Min"/>
                                <span className="mx-2">-</span>
                                <input type="text" className="form-control w-25" placeholder="Max"/>
                                <div className="ml-auto">
                                <button className="btn btn-success unique-btn"> > </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 dashed">
                        <h6 className="mb-3 side-font" >Rating</h6>
                               <div className="d-flex mb-4">
                                   <input type="radio"/>
                                   <i class="fa fa-star pl-4 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                               </div>
                               <div className="d-flex mb-4">
                                   <input type="radio"/>
                                   <i class="fa fa-star pl-4 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                  
                               </div>
                               <div className="d-flex mb-4">
                                   <input type="radio"/>
                                   <i class="fa fa-star pl-4 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                   
                               </div>
                               <div className="d-flex mb-4">
                                   <input type="radio"/>
                                   <i class="fa fa-star pl-4 text-success" aria-hidden="true"></i>
                                   <i class="fa fa-star pl-1 text-success" aria-hidden="true"></i>
                                  
                               </div>
                               <div className="d-flex mb-4">
                                   <input type="radio"/>
                                   <i class="fa fa-star pl-4 text-success" aria-hidden="true"></i>
                                   
                               </div>
                        </div>
                        <div  className="mb-4 dashed">
                        <strong style={{cursor:'pointer'}}>
                        <Collapsible trigger="Fabric" className="py-3">                           
                           <Scrollbars style={{ width: 380, height: 250}}>
                           {
                                   Fabric.map((fab, i) => 
                                    <TextsWithRadioBtn data={fab} i={i} />
                                   )
                               }
                               </Scrollbars>                     
                                <h5 className="text-success py-3"><strong>5 MORE</strong></h5>

                        </Collapsible>
                        </strong>
                        </div>
                        <div className="mb-4 dashed">
                        <strong style={{cursor:'pointer'}}>
                        <Collapsible trigger="Pattern" className="py-3">                           
                           <Scrollbars style={{ width: 380, height: 250}}>
                           {
                                   Pattern.map((fab, i) => 
                                    <TextsWithRadioBtn data={fab} i={i} />
                                   )
                               }
                               </Scrollbars>                     
                                <h5 className="text-success py-3"><strong>26 MORE</strong></h5>

                        </Collapsible>
                        </strong>
                        </div>
                        <div className="mb-4 dashed">
                        <strong style={{cursor:'pointer'}}>
                        <Collapsible trigger="Services" className="py-3">                           
                           <Scrollbars style={{ width: 380, height: 100}}>
                           {
                                   Services.map((ser, i) => 
                                    <TextsWithRadioBtn data={ser} i={i} />
                                   )
                               }
                               </Scrollbars> 
                        </Collapsible>
                        </strong>
                        </div>
                        <div className="mb-4 dashed">
                        <h6 className="mb-3 side-font" >Clothing Style</h6>
                        </div>
                        <div className="mb-4 dashed">
                        <h6 className="mb-3 side-font">Men's Trend</h6>
                        </div>
                        <div className="mb-4 dashed">
                        <h6 className="mb-3 side-font" >Fit Type</h6>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-9 d-flex flex-wrap justify-content-between" >
                    {
                        fakeData.map((data, i) => <Products data={data} key={i}/>)
                    }
                    <div className="m-auto p-5" >
                    <Pagination>
                   
                    {
                        number.map((number, i) => <Pagination.Item key={i}>{number.n}</Pagination.Item>   )
                    }                               

                    </Pagination>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Body
