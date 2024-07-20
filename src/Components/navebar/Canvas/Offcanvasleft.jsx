import React from 'react'
import { Searchinput, Productsselecttag } from '../General header/Genrealcompo/GenCompo'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'
import Buy from '../Pages/Buy/Buy'
import Blog from '../Pages/Blog/Blog'
import './Offcanva.css'
import { NavLink } from 'react-router-dom'
import Cart from '../Pages/Shop/Cart'
import { useSelector } from 'react-redux'
const Offcanvasleft = (props) => {
    const{cartdata}=useSelector((state)=>state.Shopdata)

    return (
        <>
        <div className="d-lg-none">
            <a className="px-0" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                {props.toogle}
                <h5 style={{ position: 'relative', right: '5px', bottom: '8px', }}>{cartdata.length}</h5>
            </a>
            <div className="offcanvas offcanvas-start"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div classNameName="offcanvas-body">
                <div className="container">
                <div className="row flex-column">
                    <div className="col d-flex">
                        <Searchinput />
                        <Productsselecttag/>
                        </div>
                    </div>
                    <div className="row d-flex gap-3 mt-3">
                      <NavLink to='/' className='offcanvas-links'>Home</NavLink>
                        <div className="defender"></div>
                        <NavLink to='/shop' className='offcanvas-links'>Shop</NavLink>
                        <div className="defender" ></div>
                        <NavLink to='/buy' className='offcanvas-links'>Buy</NavLink>
                        <div className="defender"></div>
                        <NavLink to='/blog' className='offcanvas-links'>Blog</NavLink>
                        <div className="defender"></div>
                        <Cart/>
                    </div>

                </div>
                </div>
                </div>

            </div>

        </>
    )
}
export default Offcanvasleft