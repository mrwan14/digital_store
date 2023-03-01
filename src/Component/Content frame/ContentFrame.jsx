/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bag from "../Bag/Bag";
import { contentContext } from "../Context/ContentContext";
import Navbar from "../NavBar/Navbar";
import "./contentframe.css";

export default function ContentFrame(props) {
  let { data, incrementProduct } = useContext(contentContext);

  const [FiltredItems, setFiltredItems] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const FilterItemsByNames = (searchTerm) => {
    const Items = data.filter((item) =>
      item.Product_Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return setFiltredItems(Items);
  };
  useEffect(() => {
    FilterItemsByNames(searchTerm);
  }, [searchTerm]);

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
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="content-frame">
        <div className="right-side-in-content">
          <Bag />
        </div>
        <div className="container-fluid">
          {searchTerm.length > 0 ? (
            <div>
              {!FiltredItems.length ? (
                <div className="fw-bold fs-3 "> Item dose not exist</div>
              ) : (
                <div className="row">
                  {FiltredItems.map((product) => (
                    <div
                      className={`col-md-${product.isWideImage ? 6 : 3} `}
                      key={product.id}
                    >
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
                            onClick={() => {
                              incrementProduct(product.id);
                            }}
                          >
                            <i className="fa-solid fa-cart-plus"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="row">
              {data.map((product) => (
                <div
                  className={`col-sm-3  col-md-${product.isWideImage ? 6 : 3}`}
                  key={product.id}
                >
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
                        onClick={() => {
                          incrementProduct(product.id);
                        }}
                      >
                        <i className="fa-solid fa-cart-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
