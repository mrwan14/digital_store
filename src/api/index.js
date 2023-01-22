export const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          Product_Name: "Apple Watch",
          Product_Model: "Serise 5 SA",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/watch.png"),
        },
        {
          id: 2,
          Product_Name: "Sony ZX330BT",
          Product_Model: "Light Grey",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/headphone.png"),
        },
        {
          id: 3,
          Product_Name: "Iphone 11",
          Product_Model: "Serious Black ",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone11(1).png"),
        },
        {
          id: 4,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone11(2).png"),
        },
        {
          id: 5,
          Product_Name: "Macbook Pro 16”",
          Product_Model: "Silver - M1 Pro",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/macbook.png"),
          isWideImage: true,
        },
        {
          id: 6,
          Product_Name: "Iphone 11",
          Product_Model: "Product RED",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone11.png"),
        },
        {
          id: 7,
          Product_Name: "Iphone 11",
          Product_Model: "Milky White",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone11 white.png"),
        },
        {
          id: 8,
          Product_Name: "Iphone 12",
          Product_Model: "Rose Pink",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone12.png"),
        },
        {
          id: 9,
          Product_Name: "Iphone 12",
          Product_Model: "Navy Blue",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone12 white.png"),
        },
        {
          id: 10,
          Product_Name: "Dell XPS 15 2-in-1",
          Product_Model: "Midnight Gray",
          Price: 526.99,
          isWideImage: true,

          ImgSrc: require("../images/product-imgs/dell xps 15.png"),
        },
        {
          id: 11,
          Product_Name: "Iphone 13 Pro",
          Product_Model: "Silly Silver",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone13 pro.png"),
        },
        {
          id: 12,
          Product_Name: "Iphone 13 Pro",
          Product_Model: "Gray",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/iphone 13pro black.png"),
        },
        {
          id: 13,
          Product_Name: "Samsung Galaxy Note 21 ",
          Product_Model: "2 - Options",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/samsoung note20.png"),
        },
        {
          id: 14,
          Product_Name: "Samsung Galaxy S21+",
          Product_Model: "Lilac Purple",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/samsoung s21.png"),
        },
        {
          id: 15,
          Product_Name: "Dell XPS 13",
          Product_Model: "White",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/dell xp 13.png"),
          isWideImage: true,
        },
        {
          id: 16,
          Product_Name: "Dell XPS 15",
          Product_Model: "Light Gray",
          Price: 526.99,
          ImgSrc: require("../images/product-imgs/dell xp 15.png"),
          isWideImage: true,
        },
      ]);
    }, 1000);
  });
};
