/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contentContext } from "../Context/ContentContext";
import "./bag.css";
export default function BagInBagDetails() {
  let { cartItems, totalPrice } = useContext(contentContext);

  return (
    <React.Fragment>
      <div className="bag text-center">
        <h1 className="mb-3">Bag</h1>
        {cartItems.length > 0 ? (
          <div className="row  gy-3 ">
            {cartItems.map((product, index) => (
              <div className="col-md-4 " key={index}>
                <div className="product ">
                  <img src={product.ImgSrc} alt="" className="w-100" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>YOYR BAG IS EMPETY</div>
        )}

        <Link to={"/checkout"}>
          <div className="mt-5">
            <h4>Total :{totalPrice}</h4>
            <button>
              {" "}
              <i class="fa-solid fa-bag-shopping m-1 "></i> CheckOut
            </button>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}
