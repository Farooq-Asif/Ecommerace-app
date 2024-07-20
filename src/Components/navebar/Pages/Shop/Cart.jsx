import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removecart } from '../../../redux/ShopSlice'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { STATUSES } from '../../../redux/ShopSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CarRental } from '@mui/icons-material';
import { SomeContext } from '../../../../App'
import { ListItem } from '@mui/material';
import { Toast } from 'bootstrap';

const Cart = () => {
    const { setlength } = useContext(SomeContext)
    const { cartdata, status } = useSelector((state) => state.Shopdata)
    console.log("🚀 : ~ file: Cart.jsx:15 ~ Cart ~ cartdata", cartdata);

    if (cartdata.length > 0) {
        console.log("🚀 : ~ file: Cart.jsx:12 ~ Cart ~ cartdata", cartdata);
    }
    // const index=cartdata.indexOf((cartdata))
    // console.log("🚀 : ~ file: Cart.jvsx:19 ~ Cart ~ index", index);

    // const res = cartdata.filter((val, index) => {
    //     return cartdata.indexOf(val) == index;
    // });

    const dispatch = useDispatch()
    // const total = cartdata.reduce((a, b) => a + b.price  , 0)
    const Total=cartdata.reduce((a,b)=>{
       return  a + b.qty *b.price
},0)
   
    const [quantity, setquantity] = useState(0)
    const increment = () => {
        setquantity(quantity + 1)
    }





    const decrement = () => {

        setquantity(quantity - 1)
        if (quantity > 0) {
            setquantity(quantity - 1)
        } else {
            setquantity(quantity - 0)
        }
    }
    if (cartdata.length === 0) {
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '33vh' }}>
                <div className="row justify-content-center align-items-center">
                    <h1 className=''> Your Cart is empty</h1>
                </div>
            </div>



        )
    }
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex  justify-content-end">
                    <div className="flex">

                        <h4> {cartdata.length} Items add</h4>
                        <h3>Total Price : ${Total}</h3>
                        <div className="d-flex  justify-content-between ">
                            <h4>Proceed To CheckOut</h4>
                            <ShoppingCartCheckoutIcon className='ms-2' />
                        </div>
                    </div>

                </div>
                <div className="row flex-column flex-sm-row">
                    <div className="col">

                        {cartdata.map((data) => {
                            const { title, price, brand, availabilityStatus, images, id, category, qty } = data
                     
                            return (
                                <>
                                    <div className="px-3 mb-3">

                                        <img src={images} alt="" style={{ height: '22vh' }} />
                                        <div className="card-body">
                                            <h2>{title}</h2>
                                            <h5 className='text-danger'>{availabilityStatus}</h5>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5>Price</h5>
                                                <h6>$ {price}</h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5>Brand</h5>
                                                <h4>{brand}</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5>category</h5>
                                                <h4>{category}</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between text-center ">
                                            <h5>Quantity</h5>
                                                <input type="number" value={qty} style={{width:'100px',textAlign:'center'}} />
                                              </div>
                                            <div className="d-flex align-items-center">
                                                <RemoveShoppingCartIcon onClick={() => (dispatch(removecart(id)))} className='btn btn-danger' style={{ width: '200px', cursor: 'pointer', height: '50px' }} />  
                                            </div>




                                        </div>
                                    </div>

                                </>
                            )
                        })


                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart