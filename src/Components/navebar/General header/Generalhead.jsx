import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './Gen.css'
import Offcanvasleft from '../Canvas/Offcanvasleft';
import { Searchinput, Productsselecttag } from './Genrealcompo/GenCompo';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Generalhead = () => {
  
    const { cartdata } = useSelector((state) => state.Shopdata)
    // console.log();
    const { cart } = useParams()
    const navigate = useNavigate()
    const handelcart = (cart) => {
        navigate('cart')
    }
    return (
        <div className='container-fluid'>
            <div className="row justify-content-center align-content-around align-items-center mt-2">
                <div className="col">
                    <div className="Main-Search-field d-lg-flex justify-content-center align-items-enter">
                        <div className="d-flex align-items-center justify-content-around">
                            <div className="d-flex align-items-center">
                
                              
                            </div>
                            
                            <h1 className='d-inline-lg-flex me-3 fw-bold text-center'>Accessories Store</h1>
                            <Offcanvasleft toogle={<LocalMallIcon />} />
                         
                        
                        </div>
                        <div className="d-none d-lg-flex">
                            <Searchinput />
                            <Productsselecttag />
                        </div>

                    </div>
                </div>
                <div className="col d-none d-lg-inline">
                    <div className="login-register d-flex gap-3 justify-content-center">
                        <label htmlFor="" className='text-capitalize register-label'>

                            Login/Register</label>
                        {/* <input type='button' className='register-btn' /> */}


                        <FavoriteIcon />

                        <LocalMallIcon onClick={() => handelcart(cart)} style={{cursor:'pointer'}}/>
                        <h5 style={{ position: 'relative', right: '20px', bottom: '8px', }}>{cartdata.length}</h5>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Generalhead