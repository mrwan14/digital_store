/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router";

export let UserDataContext = createContext(0);
export default function UserDataContextProvider(props) {
  let navigate = useNavigate();

  let [userAddressList, setuserAddressList] = useState([]);
  let [userPaymentList, setuserPaymentList] = useState([]);
  let [AddUserPayment, setAddUserPayment] = useState({
    Cardholder_Name: "",
    Card_Number: "",
    Expiry_Date: "",
    CVC: "",
    SavePayment: false,
  });
  // const addUserPaymentToList = () => {
  //   setuserPaymentList(AddUserPayment);
  //   console.log(userPaymentList);
  //   console.log("userPaymentList");

  //   return userPaymentList;
  // };

  // userPaymentList = useMemo(() => addUserPaymentToList(), [AddUserPayment]);
  // console.log(userPaymentList);


  function getUserPaymentDetails(e) {
    let newData = { ...AddUserPayment };
    newData[e.target.name] = e.target.value;
    setAddUserPayment(newData);
  }

  function submitPaymentForm() {
    userPaymentList.push(AddUserPayment);
    localStorage.setItem("userPayment", JSON.stringify(userPaymentList));

    navigate("/checkout");
  }

  const getPaymentDetailsFromStorage = async () => {
    if (localStorage.getItem("userPayment")) {
      setAddUserPayment(JSON.parse(localStorage.getItem("userPayment")));
    }
  };
  useEffect(() => {
    (async () => {
      await getPaymentDetailsFromStorage();
    })();
  }, []);

  function selelctCard(e) {
    console.log(e.target);
  }
  let [userAddress, setUserAddress] = useState({
    shipping_name: "",
    street_name: "",
    city: "",
    state: "",
    countery: "",
    saveAddress: false,
  });

  function getUserAddress(e) {
    let newData = { ...userAddress };
    newData[e.target.name] = e.target.value;
    setUserAddress(newData);
  }
  function submitAddressForm() {
    userAddressList.push(userAddress);
    localStorage.setItem("userAddress", JSON.stringify(userAddress));
    navigate("/checkout");
  }

  function saveAddress() {
    if (localStorage.getItem("userAddress")) {
      setUserAddress(JSON.parse(localStorage.getItem("userAddress")));
    }
  }

  return (
    <UserDataContext.Provider
      value={{
        getUserAddress,
        userAddress,
        submitAddressForm,
        AddUserPayment,
        userPaymentList,
        saveAddress,
        getUserPaymentDetails,
        submitPaymentForm,
        selelctCard,
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
}
