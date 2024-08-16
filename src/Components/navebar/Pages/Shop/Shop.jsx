import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Shopdataapi } from '../../../redux/ShopSlice'
import { STATUSES } from '../../../redux/ShopSlice'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Shop = () => {
  const { data: apidata, status, cartcategory } = useSelector((state) => state.Shopdata)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(Shopdataapi({ qty: 1 }))
  }, [dispatch])

  if (status === STATUSES.ERROR) {
    return <h2 className='text-danger text-center mt-5'>Something went Wrong</h2>
  }

  const handelcard = (id) => {
    navigate(`/projects/${id}`)
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-2 gy-2">
          {status === STATUSES.LOADING ? (
            Array(8).fill().map((_, index) => (
              <div className="col" key={index}>
                <div className="card text-center" style={{ cursor: 'pointer' }}>
                  <Skeleton height={200} />
                  <h2><Skeleton width={150} /></h2>
                  <h5><Skeleton width={100} /></h5>
                  <h6><Skeleton width={120} /></h6>
                  <p><Skeleton count={3} /></p>
                </div>
              </div>
            ))
          ) : (
            (cartcategory.length > 0 ? cartcategory : apidata).map((data, index) => {
              const { title, description, category, brand, id, images } = data
              return (
                <div className="col" key={index}>
                  <div className="card text-center" key={id} onClick={() => handelcard(id)} style={{ cursor: 'pointer' }}>
                    <img src={images} alt='img-1' />
                    <h2>Product: {title}</h2>
                    <h5>Category: {category}</h5>
                    <h6>Brand: {brand}</h6>
                    <p>Desc: {description}</p>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}

export default Shop
