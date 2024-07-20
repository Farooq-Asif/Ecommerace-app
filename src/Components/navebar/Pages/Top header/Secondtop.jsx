import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Topheader.css'
const Secondtop = () => {
    return (

        <div className="container-fluid background-green">
            <div className='row justify-content-center  align-items-center pt-2'>
                <div className="col d-lg-flex justify-content-center  d-none d-sm-none d-md-none">
                    <div className='languages me-1'>
                        <select className='languages-select text-white'>
                            <option className='text-dark languages-option'>ENGLISH</option>
                            <option className='text-dark'>SPANISH</option>
                            <option className='text-dark'>TURKEY</option>
                        </select>
                    </div>
                    <div className="country">
                        <select className='country-select text-white'>
                            <option value="" className='text-dark'>United States</option>
                            <option value="" className='text-dark'>United Kingdom</option>
                            <option value="" className='text-dark'>Spain</option>
                        </select>
                    </div>
                    <div className="paragrpah ms-2">
                        <p className='text-white'>FREE SHIPPING FOR ALL ORDERS OF $150 </p>
                    </div>
                </div>
                <div className="col d-flex justify-content-center py-1">
                    <div className="social-icons d-flex gap-1">

                        <InstagramIcon
                            className='text-white'
                        />
                        <FacebookIcon
                            className='text-white'
                        />
                        <TwitterIcon
                            className='text-white'
                        />
                        <YouTubeIcon
                            className='text-white'
                        />
                    </div>
                    <div className="col  d-lg-flex d-none d-sm-none d-md-none">
                    <span className='defender' style={{marginLeft:'12px',marginBottom:'12px'}}></span>
                    <div className="news-letter d-flex mx-2 gap-1">
                        <MailOutlineIcon className='text-white' />
                        <p className='text-capitalize text-white'>news letter</p>
                    </div>
                    <span className='defender' style={{marginBottom:'12px',marginRight:'6px'}}></span>
                    <div className="contact-us">
                        <p className='text-capitalize me-2 text-white'>contact us</p>
                    </div>
                    <span className='defender' style={{marginBottom:'12px',marginRight:'6px'}}></span>
                    <div className="faqs">
                        <p className='text-capitalize text-white'>faqs</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Secondtop