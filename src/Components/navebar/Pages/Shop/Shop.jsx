import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { Shopdataapi } from '../../../redux/ShopSlice'
import { STATUSES } from '../../../redux/ShopSlice'
const Shop = () => {
  const { data:apidata,status,cartcategory } = useSelector((state) => state.Shopdata)
  const dispatch = useDispatch()

  const navigate=useNavigate()


  useEffect(() => {
    dispatch(Shopdataapi({qty:1}))
  },[])

if(status===STATUSES.LOADING){
  return <h2 className='text-center mt-5'>Please Wait</h2>
}
if(status===STATUSES.ERROR){
  return <h2 className='text-danger text-center mt-5'>Something went Wrong</h2>
}
const handelcard=(id)=>{
 
navigate(`/projects/${id}`)
}
  return (
    <>
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-2 gy-2">

      
      {cartcategory.length > 0 ? cartcategory.map((data,index)=>{
        const { title, description, category, brand, id,images } = data
          return (
            <div className="col" key={index}>
            <div className="card text-center" key={id} onClick={( )=>handelcard(id)}style={{cursor:'pointer'}}>
            <img src={images} alt='img-1'/>
              <h2>Product :{title}</h2>
              <h5>catagory: {category}</h5>
              <h6>Brand: {brand}</h6>
               <p>Desc: {description}</p>
            </div>
            </div>
          )
      }):apidata.map((data,index) => {
          const { title, description, category, brand, id,images } = data
          return (
            <div className="col" key={index}>
            <div className="card text-center" key={id} onClick={( )=>handelcard(id)}style={{cursor:'pointer'}}>
            <img src={images} alt='img--1'/>
              <h2>Product :{title}</h2>
              <h5>catagory: {category}</h5>
              <h6>Brand: {brand}</h6>
               <p>Desc: {description}</p>
            </div>
            </div>
          )

        })
      }
      </div>
    </div>

    </>
  )
}

export default Shop