/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";
import { getData } from "../../api";
export let contentContext = createContext(0);
export default function ContentContextProvider(props) {
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Immediately Invoked Function
    (async () => {
      // Get items from storage and sync with state
      await getItemsFromStorage();

      // Get data from API
      setData(await getData());
    })();
  }, []);

  useEffect(() => {
    if (cartItems.length != 0) {
      localStorage.setItem("items", JSON.stringify(cartItems));
    }
    CountTotalPrice();
  }, [cartItems]);

  const getItemsFromStorage = async () => {
    const items = JSON.parse(localStorage.getItem("items") ?? "[]");
    setCartItems(items);
  };

  const addItemToCart = (id) => {
    const item = data.find((item) => item.id === id);
    if (!item) return alert("Item doesn't exist");

    setCartItems([...cartItems, item]);
  };

  let [totalPrice, settotalPrice] = useState(0);

  const CountTotalPrice = () => {
    settotalPrice(
      cartItems.reduce((acc, curr) => acc + curr.Price * curr.CountOfProduct, 0)
    );
  };

  const deleteProduct = (id) => {
    const newProducts = cartItems.filter((p) => p.id != id);
    setCartItems(newProducts);
  };

  const decrementProduct = (id) => {
    const itemInCart = cartItems.find((item) => item.id == id);

    if (itemInCart.CountOfProduct <= 1) {
      deleteProduct(id);
    } else {
      itemInCart.CountOfProduct -= 1;

      setCartItems(
        cartItems.map((item) => {
          if (item.id == itemInCart.id) {
            return itemInCart;
          } else {
            return item;
          }
        })
      );
    }
  };

  const incrementProduct = (id) => {
    const itemInCart = cartItems.find((item) => item.id == id);

    if (!itemInCart) {
      console.log(
        "found item:",
        data.find((item) => item.id == id)
      );
      setCartItems([
        ...cartItems,
        { ...data.find((item) => item.id == id), CountOfProduct: 1 },
      ]);
    } else {
      itemInCart.CountOfProduct += 1;

      setCartItems(
        cartItems.map((item) => {
          if (item.id == itemInCart.id) {
            return itemInCart;
          } else {
            return item;
          }
        })
      );
    }
  };


  let [newRating, setNewRating] = useState(0);
  const ratingChanged = (newRating, id) => {
    const item = cartItems.find((item) => item.id == id);
    if (item) {
      item.rating = newRating;
      setNewRating(item.rating);
    } 
  };
  return (
    <contentContext.Provider
      value={{
        addItemToCart,
        cartItems,
        setCartItems,
        getItemsFromStorage,
        CountTotalPrice,
        totalPrice,
        deleteProduct,
        decrementProduct,
        incrementProduct,
        data,
        newRating,
        ratingChanged,
      }}
    >
      {data == null ? <div>Loading...</div> : props.children}
    </contentContext.Provider>
  );
}
