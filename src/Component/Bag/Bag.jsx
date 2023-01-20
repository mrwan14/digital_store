import React, { useContext, useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import { contentContext } from "../Context/ContentContext";
import "./bag.css";
export default function Bag() {
  let { ProductInBag  ,totalPrice , } = useContext(contentContext);
  

  return (
    <React.Fragment>
      <div className="bag text-center">
        <h1 className="mb-3">Bag</h1>
        {ProductInBag.length > 0 ? (
          <div className="row  gy-3 ">
            {ProductInBag.map((product) => (
              <div className="col-md-4 ">
                <div className="product ">
                  <img src={product.ImgSrc} alt="" className="w-100" />
                </div>
              </div>
            ))}
            {/* <button className="btn btn-danger " onClick={clear}>clear</button> */}
          </div>
        ) : (
          <div>YOYR BAG IS EMPETY</div>
        )}

        <Link to={"/bag-details"}>
          <button  id="viewBag" className=" d-inline-block">
            {" "}
            <i   className="fa-solid fa-bag-shopping m-1 "></i> View Bag
          </button>
          <div id="checkOut" className="d-none">

            <h4>Total :{totalPrice}</h4>
          <button > 
            {" "}
            <i class="fa-solid fa-bag-shopping m-1 "></i> CheckOut
          </button>

          </div>

        </Link>
      </div>
    </React.Fragment>
  );
}
