/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { contentContext } from "../Context/ContentContext";
import "./checkOut.css";
import { UserDataContext } from "../Context/UserData";

export default function CheckOut() {
  let { cartItems, totalPrice, decrementProduct, incrementProduct ,ratingChanged } =
    useContext(contentContext);
  let { userAddress, saveAddress, AddUserPayment } =
    useContext(UserDataContext);

  useEffect(() => {
    saveAddress();
  }, []);
  return (
    <React.Fragment>
      <div className="checkout">
        <div className="shopping-address ">
          <h1 className="main-title">SHIPPING ADDRESS</h1>
          {localStorage.getItem("userAddress") ? (
            <div className="user-adddress  ">
              <h5 className=" fw-normal">
                <i className="fa-solid fa-street-view me-2"></i>
                {userAddress.street_name}{" "}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i className="fa-solid fa-city me-2"></i>
                {userAddress.city}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i className="fa-solid fa-flag-usa me-2"></i>
                {userAddress.state}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i className="fa-solid fa-flag me-2"></i>
                {userAddress.countery}
              </h5>
            </div>
          ) : (
            <div className="user-adddress">
              <h5 className=" fw-normal">
                {" "}
                <i className="fa-solid fa-street-view "></i>
                {userAddress.street_name}{" "}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i className="fa-solid fa-city"></i>
                {userAddress.city}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i className="fa-solid fa-flag-usa"></i>
                {userAddress.state}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i className="fa-solid fa-flag"></i>
                {userAddress.countery}
              </h5>
            </div>
          )}

          <Link to={"/changeaddress"}>
            {" "}
            <button className="btn  btn-outline-dark">change</button>
          </Link>
        </div>
        <div className="payment-method">
          <h1 className="main-title">PAYMENT METHOD</h1>
          {localStorage.getItem("userPayment") ? (
            <div className="user-adddress ">
              <h5 className="fw-normal">
                {" "}
                <i className="fa-brands fa-cc-mastercard me-2"></i> Mastercard
                ending in {AddUserPayment.Expiry_Date}{" "}
              </h5>
              <h5 className="fw-normal">
                <i className=" fa-solid  fa-gift me-2"></i> $ 53.21 gift card
                balance{" "}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i class="fa-sharp fa-solid fa-square me-2"></i>Billing address
                same as Shipping Address
              </h5>
            </div>
          ) : (
            <div className="user-adddress ">
              <h5 className="fw-normal">
                {" "}
                <i className="fa-brands fa-cc-mastercard me-2"></i> Mastercard
                ending in {AddUserPayment.Expiry_Date}{" "}
              </h5>
              <h5 className="fw-normal">
                <i className=" fa-solid  fa-gift me-2"></i> $ 53.21 gift card
                balance{" "}
              </h5>
              <h5 className="fw-normal">
                {" "}
                <i class="fa-sharp fa-solid fa-square me-2"></i>Billing address
                same as Shipping Address
              </h5>
            </div>
          )}

          <Link to={"/addpayment"}>
            {" "}
            <button className="btn  btn-outline-dark">change</button>
          </Link>
        </div>
        <div className="review-bag p-3">
          <h1 className="main-title">Review you Bag</h1>
          {cartItems.map((product) => (
            <div className="card-item mt-5">
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
                        onChange={(e)=>{ratingChanged(e,product.id)}}
                        size={24}
                        activeColor="#1db04e"
                      />
                    </div>

                    <h4 className=" text-success ms-5 mt-1"> {product.rating}/5</h4>
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
              <div className="brdr-review"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="summary p-3">
        <h2 className=" mb-3">Order Summary</h2>
        <div className="details   lead text-muted">
          <div className="items d-flex align-items-center justify-content-between ">
            <h6>Items: </h6>
            <h6>$ {totalPrice}</h6>
          </div>
          <div className="items d-flex align-items-center justify-content-between ">
            <h6>Shipping: </h6>
            <h6>$ 6.09</h6>
          </div>{" "}
          <div className="items d-flex align-items-center justify-content-between ">
            <h6>Estimated GST: </h6>
            <h6>$ 760.99</h6>
          </div>{" "}
          <div className="items d-flex align-items-center justify-content-between ">
            <h6>Gift Card: </h6>
            <h6>$ 0</h6>
          </div>
        </div>
        <div className="summary-brdr1"></div>
        <h4 className="text-danger fw-bold order-total">
          Order Total:$ {Math.round(totalPrice) + 6 + 760}{" "}
        </h4>
        <div className="summary-brdr2"></div>
        <button className="btn btn-dark ">Place your order </button>
        <Link to={"/bag-details"}>
          {" "}
          <button className="btn  btn-outline-dark back fw-bold">
            {" "}
            <i className=" fas fa-angle-left"></i> back
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
}
