import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../Context/UserData";
import "./addpayment.css";
export default function AddPayment() {
  let { getUserPaymentDetails, submitPaymentForm, userPaymentList } =
    useContext(UserDataContext);

  return (
    <React.Fragment>
      <div className="payment">
        <div className="select-card mb-3">
          <h3 className="main-title">SELECT A CARD</h3>
          <div className="payment-methods "></div>
          <div>
            {userPaymentList.map((card) => (
              <h6 className="text-muted">
                <i className="fa-brands fa-cc-mastercard   me-3"></i> MasterCard
                ending in {card.Expiry_Date}
              </h6>
            ))}
          </div>
        </div>
        <div className="add-payment ">
          <h3 className="main-title">ADD A NEW CARD </h3>
          <div className="form mt-3 ms-2">
            <div className="user m-3">
              <label htmlFor="Cardholder_Name" className="  text-muted d-block">
                {" "}
                Cardholder Name
              </label>
              <input
                onChange={getUserPaymentDetails}
                id="Cardholder_Name"
                name="Cardholder_Name"
                type="text"
                placeholder="John Maker"
                className=" form-control shadow"
              />
            </div>

            <div className="user m-3">
              <label htmlFor="Card_Number" className="  text-muted d-block">
                {" "}
                Card Number
              </label>
              <input
                onChange={getUserPaymentDetails}
                id="Card_Number"
                name="Card_Number"
                type="numbet"
                placeholder="5126-5987-2214-7621"
                className=" form-control shadow"
              />
            </div>
            <div className="data-cvc d-flex">
              <div className="user m-3  ">
                <label htmlFor="Expiry_Date" className="  text-muted d-block">
                  {" "}
                  Expiry Date
                </label>
                <input
                  onChange={getUserPaymentDetails}
                  id="Expiry_Date"
                  name="Expiry_Date"
                  type="text"
                  placeholder="   MM / YYYY"
                  className=" form-control shadow w-75"
                />
              </div>
              <div className="user m-3">
                <label htmlFor="CVC" className="  text-muted d-block">
                  {" "}
                  CVC{" "}
                </label>
                <input
                  onChange={getUserPaymentDetails}
                  id="CVC"
                  name="CVC"
                  type="text"
                  placeholder="123"
                  className=" form-control shadow w-50"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid "
                  type="checkbox"
                  value=""
                  id="invalidCheck3"
                  required
                />
                <label
                  className="form-check-label text-black fw-bolder"
                  htmlFor="invalidCheck3"
                >
                  Save this as your default payment method
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-dark jus " onClick={submitPaymentForm}>
              {" "}
              <i className=" fa-brands fa-cc-mastercard me-2"></i> Add Payment
              Method
            </button>
          </div>
          <div className="info d-flex  justify-content-around">
            <Link className="ms-4 fw-bolder " to={"/checkout"}>
              back
            </Link>
            <div></div>
            <div></div>
            <p className=" secure">
              {" "}
              <i className="fas fa-lock me-2"> </i>connection secure
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
