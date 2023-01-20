import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Bag from "../Bag/Bag";
import { contentContext } from "../Context/ContentContext";
import Navbar from "../NavBar/Navbar";
import "./contentframe.css";

export default function ContentFrame(props) {
  let { productContainer, getItem ,ProductInBag,saveData ,CountTotalPrice,savePrice} = useContext(contentContext);

  
  useEffect(()=>{
    if(localStorage.getItem('items')){
      saveData()
      savePrice()
      
      }
      
    },[/* ProductInBag*/])

   



  return (
    <React.Fragment>
      <div className="left-side-in-content">
        <Navbar />
      </div>
      <div className="brdr"></div>


      <div className="topbar">
        <label htmlFor="search" className="ms-2 label">
          search item
        </label>
        <input
          className="input"
          type="text"
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          name="search"
        />
      </div>
      <div className="content-frame">
              <div className="right-side-in-content">
        <Bag/>
      </div>
        <div className="container-fluid">
          <div className="row">
            {productContainer.map((product, index) => (
              <div className={`col-md-${product.isWideImage ? 6 : 3}`}>
                  <div className="content-product m-2  mb-0">
                  <Link to={`/item-view/${product.id}`}>

                    <div className="img-container">
                      <img src={product.ImgSrc} alt="" />
                    </div>
                    </Link>

                    <div className="product-desc m-3">
                      <h5>{product.Product_Name}</h5>
                      <p className="lead">{product.Product_Model}</p>
                      </div>
                      <div className="for-flex d-flex justify-content-between  mt-0 ">
                        <h5>$ {product.Price}</h5>
                        <div
                          className="exit-icon bg-dark text-white"
                          onClick={event =>{ getItem(product.id)   
                                CountTotalPrice(product.id)   } }
                          
                        >
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>

                      </div>

                  </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
