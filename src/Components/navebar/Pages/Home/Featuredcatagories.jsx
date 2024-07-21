import React from 'react'

import image1 from '../../../../Images/product-furniture-7-3-430x490.jpg.webp'
import image2 from '../../../../Images/dock-black-walnut-ip6-grid-B1_1.jpg'
import image3 from '../../../../Images/product-accessories-8-1-430x491.jpg'
import image4 from '../../../../Images/product-furniture-11-3.jpg'
import image5 from '../../../../Images/product-furniture-19-430x491.jpg'
import image6 from '../../../../Images/product-furniture-8.jpg'
import image7 from '../../../../Images/product-light-5-2-430x490.jpg.webp'

const Featuredcatagories = () => {
    return (
        <div className='container mb-3 featurecatagory mt-4'>
            <h6 className='text-capitalize text-center'>Woodmart collections</h6>
            <h2 className='text-center text-capitalize'>features categories</h2>
            <h6 className='text-center'>WoodMart  is a good store</h6>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
                <div className="col text-center">
                    <img src={image1} alt="as" className='img-fluid' />
                    <h5 htmlFor="" className='img-text'>Furniture</h5>
                </div>
                <div className="col text-center">
                    <img src={image2} alt="as" className='img-fluid' />
                    <h5 htmlFor="" className='img-text'>Smart phones</h5>
                </div>
                <div className="col text-center">
                    <img src={image3} alt="as" className='img-fluid' />
                    <h5  className='img-text'>Smart Watches</h5>
                </div>
                <div className="col text-center">
                    <img src={image4} alt="as" className='img-fluid' />
                    <h5  className='img-text'>Wine</h5>
                </div>
                <div className="col  text-center">
                    <img src={image5} alt="as" className='img-fluid' />
                    <h5  className='img-text'>Chairs</h5>
                </div>
                <div className="col  text-center">
                    <img src={image6} alt="as" className='img-fluid' />
                    <h5  className='img-text'>Eames lounge chair</h5>
                </div>
                <div className="col text-center">
                    <img src={image7} alt="as" className='img-fluid' />
                    <h5  className='img-text'>Lamp</h5>
                </div>
            </div>
          
        </div>
    )
}

export default Featuredcatagories