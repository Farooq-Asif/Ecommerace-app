import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { filtersdatathunk } from '../../../redux/ShopSlice'
import { addtocart } from '../../../redux/ShopSlice'
import { STATUSES } from '../../../redux/ShopSlice'
const Id = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {filterdata,status } = useSelector((state) => state.Shopdata)
  

  const { description, availabilityStatus, brand, category, discountPercentage, price, rating, returnPolicy, shippingInformation, stock, weight, images, title } = filterdata

 

  const handelcart = (filterdata) => {
    
    dispatch(addtocart({ ...filterdata, qty: 1 }))

  }

  useEffect(() => {
    dispatch(filtersdatathunk(id))

  }, [])
  if(status===STATUSES.LOADING){
    return <h2>loading</h2>
  }
  if(status===STATUSES.ERROR){
    return <h2>error occured</h2>
  }

  return (
    <>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6" >
            {Object.keys(filterdata).length > 0 ?
              <div className="" key={id} >
                <img src={images} className='card-img-top img-fluid' alt="" />
                <h3>{title}</h3>
                <h5 className='text-danger' >{availabilityStatus}</h5>
                <p>{description}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Brand</h5>
                  <h6>{brand}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Category</h5>
                  <h6>{category}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Discount</h5>
                  <h6>{discountPercentage} %</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Price</h5>
                  <h6>$ {price}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Rating</h5>
                  <h6>{rating}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Return policy</h5>
                  <h6>{returnPolicy}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Shipment Time</h5>
                  <h6>{shippingInformation}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Stock</h5>
                  <h6>{stock} items</h6>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <h5>Weight</h5>
                  <h6> {weight}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <AddShoppingCartIcon className='fs-1 btn btn-primary mb-3' onClick={() => handelcart(filterdata)} style={{ cursor: 'pointer', width: '150px' }} />
                </div>
              </div>
              :status===STATUSES.ERROR}
          </div>

        </div>

      </div>







    </>





  )
}

export default Id