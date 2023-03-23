/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contentContext } from "../Context/ContentContext";
import "./bag.css";
export default function Bag() {
  let { cartItems } = useContext(contentContext);

  return (
    <React.Fragment>
      <div className="bag text-center">
        <h1 className="mb-3">Bag</h1>
        {cartItems.length > 0 ? (
          <div className="row  gy-3 ">
            {cartItems.map((product, i) => (
              <div className="col-lg-4  col-md-6 " key={i}>
                <div className="product ">
                  <img src={product.ImgSrc} alt="" className="w-100" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>YOYR BAG IS EMPETY</div>
        )}

        <Link to={"/bag-details"}>
          <button id="viewBag" className=" d-inline-block">
            {" "}
            <i className="fa-solid fa-bag-shopping m-1 "></i> View Bag
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
}
