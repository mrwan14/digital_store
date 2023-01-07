import React, { useContext, useState } from "react";
import { contentContext } from "../Context/ContentContext";
import ReactStars from "react-rating-stars-component";
import "./bagdetails.css";
import Navbar from "../NavBar/Navbar";
import Bag from "../Bag/Bag";

export default function BagDetails() {
  let {  ProductInBag } = useContext(contentContext);
  const [newRating, setNewRating] = useState(0);
  let [productCount, setproductCount] = useState(1);

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setNewRating(newRating);
  };
  function increment() {
    productCount = productCount + 1;
    setproductCount(productCount);
  }
  function decrement() {
    productCount = productCount - 1;
    setproductCount(productCount);
  }
  return (
    <React.Fragment>
        <div className="left-side">
        <Navbar />
        </div>
        <div className="brdr"></div>

        <div className="right-side">
        <Bag/>
      </div>
      <div className="bad-details">
        <h1 className="ms-5 mb-3">Check your Bag Items</h1>


        {ProductInBag.length  > 0 ? <div>
            {ProductInBag.map((product)=> (
                
          <div className="card-item mb-3">
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
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#1db04e"
                    />
                  </div>

                  <h4 className=" text-success ms-5 mt-1"> {newRating}/5</h4>
                </div>
                <div className="price d-flex justify-content-between align-items-center">
                  <h4>
                    $ {product.Price * productCount} x {productCount}
                  </h4>
                  <div className="right-buttons d-flex justify-content-center align-items-center ">
                    <i
                      onClick={decrement}
                      class="fa-solid fa-minus text-danger"
                    ></i>
                    <h4 className="   m-4">{productCount}</h4>
                    <i
                      onClick={increment}
                      class="fa-solid fa-plus text-success me-5 "
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
            
             </div> : <div>YOUR BAG IS EMPETY </div>}
       
      </div>
    </React.Fragment>
  );
}
