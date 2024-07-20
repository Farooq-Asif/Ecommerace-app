import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
const Catagories = () => {
  return (
   <>
   <div className="d-inline-flex flex-column">
    <select className='text-capitalize bg-success'><DensityMediumIcon/><h3>Browser Categorie</h3></select>
    <li className="d-inline">Furniture</li>
    <li className="d-inline">Cooking</li>
    <li className="d-inline">Accessories</li>
    <li className="d-inline">Fashion</li>
    <li className="d-inline">Clocks</li>
    <li className="d-inline">Lighting</li>
    <li className="d-inline">Toys</li>
    <li className="d-inline">Hand Made</li>
    <li className="d-inline">Minimalism</li>
    <li className="d-inline">Electronics</li>
    <li className="d-inline">Cars</li>
    </div>
   </>
  )
}

export default Catagories