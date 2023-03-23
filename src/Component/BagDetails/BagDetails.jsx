/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { contentContext } from "../Context/ContentContext";
import ReactStars from "react-rating-stars-component";
import "./bagdetails.css";
import Navbar from "../NavBar/Navbar";
import BagInBagDetails from "../Bag/BagInBagDetails";

export default function BagDetails() {
  const { cartItems, decrementProduct, incrementProduct ,ratingChanged, newRating} =
    useContext(contentContext);


  useEffect(() => {
    ratingChanged();
  }, [newRating]);

  return (
    <React.Fragment>
        <Navbar />
      <div className="brdr "></div>
        <BagInBagDetails />
      <div className="bag-details">
        <h1 className="ms-5 mb-3">Check your Bag Items</h1>

        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((product, index) => (
              <div className="card-item mb-3" key={index}>
                <div className="row   p-2">
                  <div className="col-md-4">
                    <div className="img-in-card-details">
                      <img src={product.ImgSrc} alt="" className="w-100" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h2>{product.Product_Name}</h2>
                    <h3 className="text-muted"> {product?.Product_Model}</h3>
                    <p className="lead">
                      Lorem ipsum dolor sit amet cctetur, excepturi!
                    </p>
                    <div className="starts   d-flex align-items-center   ">
                      <div className="star">
                        <ReactStars
                          count={5}
                          onChange={(e) => {
                            ratingChanged(e, product.id);
                          }}
                          size={24}
                          activeColor="#1db04e"
                        />
                      </div>

                      <h4 className=" text-success ms-5 mt-1">
                        {" "}
                        {product.rating ?? 0}/5
                      </h4>
                    </div>
                    <div className="price d-flex justify-content-between align-items-center">
                      <h4>
                        $ {product.Price * product.CountOfProduct} x{" "}
                        {product.CountOfProduct}
                      </h4>
                      <div className="right-buttons d-flex justify-content-center align-items-center ">
                        <i
                          onClick={() => decrementProduct(product.id)}
                          className="fa-solid fa-minus text-danger"
                        ></i>
                        <h4 className="m-4">{product.CountOfProduct}</h4>
                        <i
                          onClick={() => incrementProduct(product.id)}
                          className="fa-solid fa-plus text-success me-5 "
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>YOUR BAG IS EMPETY </div>
        )}
      </div>
    </React.Fragment>
  );
}
