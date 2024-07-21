import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Shopdataapi } from "../../../redux/ShopSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { filtersdatathunk } from "../../../redux/ShopSlice";
import { addtocart } from "../../../redux/ShopSlice";
import { styled } from "@mui/material";
import { STATUSES } from "../../../redux/ShopSlice";
const Id = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, filterdata, status } = useSelector((state) => state.Shopdata);
  const [fdata, setfdata] = useState([]);

  const handelcart = (filterdata) => {
    console.log("🚀 : ~ file: Id.jsx:28 ~ handelcart ~ filterdata", filterdata);
    dispatch(addtocart({ ...filterdata, qty: 1 }));
  };

  useEffect(() => {
    dispatch(filtersdatathunk(id));
  }, [id]);
  if (status === STATUSES.LOADING) {
    return <h2>loading</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>error occured</h2>;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            {filterdata && Object.keys(filterdata).length > 0 && (
              <div className="" key={filterdata.title}>
                <img
                  src={filterdata.images}
                  className="card-img-top img-fluid"
                  alt=""
                />
                <h3>{filterdata.title}</h3>
                <h5 className="text-danger">{filterdata.availabilityStatus}</h5>
                <p>{filterdata.description}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Brand</h5>
                  <h6>{filterdata.brand}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Category</h5>
                  <h6>{filterdata.category}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Discount</h5>
                  <h6>{filterdata.discountPercentage} %</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Price</h5>
                  <h6>$ {filterdata.price}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Rating</h5>
                  <h6>{filterdata.rating}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Return policy</h5>
                  <h6>{filterdata.returnPolicy}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Shipment Time</h5>
                  <h6>{filterdata.shippingInformation}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Stock</h5>
                  <h6>{filterdata.stock} items</h6>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <h5>Weight</h5>
                  <h6> {filterdata.weight}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <AddShoppingCartIcon
                    className="fs-1 btn btn-primary mb-3"
                    onClick={() => handelcart(filterdata)}
                    style={{ cursor: "pointer", width: "150px" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Id;
