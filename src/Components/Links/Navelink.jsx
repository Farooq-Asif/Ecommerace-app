import React from 'react'
import { NavLink } from 'react-router-dom'
const Navelink = () => {
  return (
    <>
    <div className="contianer-fluid">

    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3 d-none d-lg-flex">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 justify-content-center flex-grow-1">
        <li className="nav-item">
        <li><NavLink to='/' className='navlinks'>Home</NavLink></li>
        </li>
        <li class="nav-item">
        <li><NavLink to='/shop' className='navlinks'>Shop</NavLink></li>
        </li>
        <li class="nav-item">
        <li><NavLink to='/blog' className='navlinks'>Blog</NavLink></li>
        </li>
        <li class="nav-item">
        <li><NavLink to='/buy' className='navlinks'>Buy</NavLink></li>
        </li>
        
      </ul>
 
    </div>
</nav>
</div>
</>
  )
}

export default Navelink