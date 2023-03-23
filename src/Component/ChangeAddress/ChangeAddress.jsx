import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../Context/UserData";
import "./changeaddress.css";
export default function ChangeAddress() {
  let { getUserAddress, submitAddressForm } = useContext(UserDataContext);
  return (
    <div>
      <div className="change-address ">
        <div className="form mt-3 ms-2 ">
          <div className="user m-3">
            <label htmlFor="shipping_name" className="  text-muted d-block">
              {" "}
              Shipping Name
            </label>
            <input
              onChange={getUserAddress}
              id="shipping_name"
              name="shipping_name"
              type="text"
              placeholder="John Maker"
              className=" form-control shadow"
            />
          </div>
          <div className="user m-3">
            <label htmlFor="street_name" className="  text-muted d-block">
              {" "}
              Street Name
            </label>
            <input
              onChange={getUserAddress}
              id="street_name"
              name="street_name"
              type="text"
              placeholder="123 Plae Grond Stret"
              className=" form-control shadow"
            />
          </div>{" "}
          <div className="user m-3">
            <label htmlFor="city" className="  text-muted d-block">
              {" "}
              City
            </label>
            <input
              onChange={getUserAddress}
              id="city"
              name="city"
              type="text"
              placeholder="Vermont"
              className=" form-control shadow"
            />
          </div>
          <div className="user m-3">
            <label htmlFor="state" className="  text-muted d-block">
              {" "}
              State / Province
            </label>
            <input
              onChange={getUserAddress}
              name="state"
              id="state"
              type="text"
              placeholder="California"
              className=" form-control shadow"
            />
          </div>
          <div className="user m-3">
            <label htmlFor="countery" className="  text-muted d-block">
              {" "}
              Country
            </label>
            <input
              onChange={getUserAddress}
              name="countery"
              id="countery"
              type="text"
              placeholder="United States of America"
              className=" form-control shadow"
            />
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
                for="invalidCheck3"
              >
                Save this as your default address{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {" "}
          <button className="btn btn-dark " onClick={submitAddressForm}>
            {" "}
            Add Address
          </button>
        </div>
        <div className="info d-flex justify-content-around ">
          <Link className="ms-4 fw-bolder " to={"/checkout"}>
            back
          </Link>
          <div></div>
          <div></div>{" "}
          <p className=" secure">
            {" "}
            <i className="fas fa-lock me-2"> </i>connection secure
          </p>
        </div>
      </div>
    </div>
  );
}
