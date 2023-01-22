/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import "./dashboard.css";
import ContentFrame from "../Content frame/ContentFrame";
import { Route, Routes } from "react-router";
import ItemView from "../Item-view/ItemView";
import BagDetails from "../BagDetails/BagDetails";
import CheckOut from "../CheckOut/CheckOut";
import { contentContext } from "../Context/ContentContext";
import AddPayment from "../AddPayment/AddPayment";
import ChangeAddress from "../ChangeAddress/ChangeAddress";

export default function Dashboard() {
  let {ProductInBag,setProductInBag,saveData,savePrice}=useContext(contentContext)

  


  return (
    <React.Fragment>
      <div className="dashboard">
        <div className="content-area">
          <Routes>
            <Route path="/" element={<ContentFrame />} />
            <Route path="content-frame" element={<ContentFrame />} />
            <Route path="item-view/:id" element={<ItemView />} />
            <Route path="bag-details" element={<BagDetails />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="addpayment" element={<AddPayment />} />3
            <Route path="changeaddress" element={<ChangeAddress />} />
            <Route
              path="*"
              element={
                <div className="fs-5 fw-bolder ms-5 mt">
                  {" "}
                  <h1>Page Not Found</h1>{" "}
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}
