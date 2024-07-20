import React from 'react'
import Featuredimg1 from '/home/farooq/1stproject/src/Images/product-accessories-8.jpg'
import Featuredimg2 from '/home/farooq/1stproject/src/Images/product-furniture-8.jpg'
import Featuredimg3 from '/home/farooq/1stproject/src/Images/product-clock-2-1.jpg.webp'
import Featuredimg4 from '/home/farooq/1stproject/src/Images/product-accessories-10.jpg'
import Featuredimg5 from '/home/farooq/1stproject/src/Images/product-furniture-14-2.jpg'
import Featuredimg6 from '/home/farooq/1stproject/src/Images/product-furniture-19-3.jpg'


const Featuredproducts = () => {
  return (
   <div className="container d-flex flex-column align-items-center gap-3 featured-products">
   <h5>WOODEN ACCESSORIES</h5>
   <h4>FEATURED PRODUCTS</h4>
   <p>Visit our shop to see amazing creations from our designers.</p>
     <div className="title-after-title d-flex gap-3">
        <li className='text-capitalize list-group-item disabled'>best sellers</li>
        <li className='text-capitalize list-group-item disabled'>featured</li>
        <li className='text-capitalize list-group-item disabled'>sales</li>
     </div>
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
        <div className="col featurecol">
            <img src={Featuredimg1} alt="" className='img-fluid' />
            <div className="text-center">
            <h4>Smart watches wood edition</h4>
            <h5> Accessories, Clocks</h5>
            <p className='text-success'>$599.00</p>
            </div>
        </div>
        <div className="col featurecol">
            <img src={Featuredimg2} alt="" className='img-fluid'  />
            <div className="text-center">
            <h4>Eames lounge chair</h4>
            <h5> Wooden single drawer</h5>
            <p className='text-success'>$249.00 - $399.00</p>
            </div>
        </div>
        <div className="col featurecol">
            <img src={Featuredimg3} alt="" className='img-fluid' />
            <div className="text-center">
            <h4>CLOCKS</h4>
            <h5> Wooden single drawer</h5>
            <p className='text-success'> $399.00</p>

            </div>
        </div>
        <div className="col featurecol">
            <img src={Featuredimg4} alt="" className='img-fluid'  />
            <div className="text-center">
            <h4>Decoration wooden present</h4>
            <h5> Accessories</h5>
            <p className='text-success'> $199.00</p>

            </div>
        </div>
        <div className="col featurecol">
            <img src={Featuredimg5} alt="" className='img-fluid'  />
            <div className="text-center">
            <h4>Decoration for table pen</h4>
            <h5>  Accessories</h5>
            <p className='text-success'>$249.00</p>

            </div>
        </div>
        <div className="col featurecol">
            <img src={Featuredimg6} alt="" className='img-fluid'  />
            <div className="text-center">
            <h4>Panton tunior chair</h4>
            <h5> Wooden single drawer</h5>
            <p className='text-success'>$199.00</p>

            </div>
        </div>
     </div>

   </div>
  )
}

export default Featuredproducts