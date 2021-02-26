import React from 'react'
import zDrop from '../../assets/zDrop.jpg'
import facebook from '../../assets/002-facebook-logo.png'
import twitter from '../../assets/001-twitter-logo-silhouette.png'
import instagram from '../../assets/instagram (1).png'
import linkedin from '../../assets/004-linkedin-logo.png'
import youtube from '../../assets/005-youtube.png'
import bkask from '../../assets/BKash-bKash-Logo.wine.png'
import amex from '../../assets/amex-logo-png.png'
import master from '../../assets/Mastercard-logo.png'
import visa from '../../assets/g4158.png'
import nagad from '../../assets/nagad-logo-7A70CCFEE0-seeklogo.com.png'
import hotline from '../../assets/customer-service-2-line.png'
import wholesale from '../../assets/phone-line.png'
import email from '../../assets/mail-send-line.png'


const social = [
    {
        img: facebook
    },
    {
        img: twitter
    },
    {
        img: instagram
    },
    {
        img: linkedin
    },
    {
        img: youtube
    },
]
function Footer() {
    return (
     
            <div className="row my-5">
            
            <div className="col-md-4">
                <img src={zDrop} alt="" style={{width:'95%'}}/>
            </div>
            <div className="col-md-4">
               <div className="container container-fluid px-5">
               <div className="container container-fluid">
                {
                    social.map((icon, i) =>
                       
                            <img src={icon.img} alt="" className="m-4" style={{height:'3.4vh'}} key={i}/>
                        
                    )
                }
                </div>
                <h4 className="mt-4">SUBSCRIBE</h4>
                <p style={{fontSize:'1.3rem'}}>Get the latest news from zDrop</p>
                <input type="email" className='form-control bg-light' placeholder="Enter your email address"/>
               </div>
                <div className="row mt-5 text-center">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <h6>About zDrop</h6>
                        
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <h6>FAQ & Support</h6>
                        
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <h6>Terms & Conditions</h6>
                        
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <h6>Privacy Policy</h6>
                        
                    </div>
                </div>
                <div className="row mt-4 text-center">
                    <div className="col-md-2">
                        <img src={bkask} alt=""/>
                    </div>
                    <div className="col-md-2">.
                    <img src={nagad} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={bkask} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={visa} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={master} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={amex} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-4 justify-content-center" style={{marginTop: "12vh", fontSize: "1.2rem"}}>
                <h4>CONTACT US</h4>
                <div className="d-flex flex-wrap my-2">
                    <div>
                        <img src={hotline} className="mr-2" alt=""/>
                        
                    </div>
                    <div>
                        <h5>Hotline</h5>
                        <p>+8801929459195 (10am-10pm/Sat-Thur)</p>
                        
                    </div>
                </div>
                <div className="d-flex flex-wrap mb-2">
                    <div>
                        <img src={wholesale} className="mr-2" alt=""/>
                    </div>
                    <div>
                    <h5>Whole Sale</h5>
                    <p>01929459195 (10am-12pm)</p>
                    </div>
                </div>
                <div className="d-flex flex-wrap mb-2">
                    <div>
                        <img src={email} className="mr-2" alt=""/>
                    </div>
                    <div>
                    <h5>Email</h5>
                    <p>support.example@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </div>
 
    )
}

export default Footer
