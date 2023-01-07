import React, { useContext, useEffect, useState } from "react";
import "./itemview.css";
import { contentContext } from "../Context/ContentContext";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Navbar from "../NavBar/Navbar";
import Bag from "../Bag/Bag";

export default function ItemView() {
  let { productContainer } = useContext(contentContext);
  const [newRating, setNewRating] = useState(0);

  const [item, setItem] = useState(null);
  let params = useParams();

  function getItem() {
    const data = productContainer.find((item) => item.id == params.id);
    setItem(data);
  }
  useEffect(() => {
    getItem();
  }, [params.id]);

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setNewRating(newRating);
  };

  return (
    <React.Fragment>
              <div className="left-side-in-items">
        <Navbar />
        </div>
        <div className="brdr"></div>

        <div className="right-side">
        <Bag/>
      </div>
      <div className="item-view ">
        <div className="link  ">
          <Link
            className="d-flex justify-content-center align-items-center"
            to={"/content-frame"}
          >
            {" "}
            <i className="fa-solid fa-chevron-left m-2"></i> Back
          </Link>
        </div>
        <div className="top-area ">
          <div className="row d-flex">
            <div className="col-md-1">
              <div className="small-img">
                <img src={item?.ImgSrc} alt="" />
                <img src={item?.ImgSrc} alt="" />
                <img src={item?.ImgSrc} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-img">
                <img src={item?.ImgSrc} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h1>{item?.Product_Name}</h1>
              <h2 className=" text-muted">{item?.Product_Model}</h2>
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
              <h3 className="mt-3">$ {item?.Price}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quio.
                Doloribus incidunt tempora sit doloremque. Ipsa unde cum vitae
                fuga? Laboriosam fuga incidunt labore nemo.
              </p>
              <Link to={`/bag-details`}>
                {" "}
                <button className="btn text-white bg-dark">
                  {" "}
                  <i class="fa-solid fa-bag-shopping me-2"></i> add to bag
                </button>
              </Link>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="bottom-area">
          <h1>Description</h1>
          <p>
            Lorem, ipsum dolor sicaecati cum molestiaeiis minima natus corrupti
            veniam autem eligendi voluptatibus eius corporis similique
            reprehenderit sequi vitae necessitatibus ducimus quae, illo hic sed,
            voluptate nemo reiciendis nobis aut neque perferendis error! Quasi
            necessitatibus totam impedit corrupti! Dolorem voluptate dicta ex
            vitae. Error saepe esse blanditiis qui mollitia ipsam tempore sed
            nisi placeat, magni voluptas non sapiente! Sequi dolor voluptatibus
            nesciunt rerum libero laudantium. Natus non illum vero reprehenderit
            qui eveniet recusandae alias, saepe aut dolore, hic nemo porro? Nam
            reprehenderit sint nesciunt eius et quasi amet facere labore sed
            autem eos exercitationem, consectetur ratione, deleniti quae ab
            doloremque vel, earum libero consequatur. Molestiae repudiandae quia
            aliquid deserunt voluptates explicabo reprehenderit tempora,
            possimus, non, necessitatibus iste fugit corrupti repellendus ullam
            error perferendis! Libero ab dolor illo magni ipsam dicta cupiditate
            nulla velit aperiam nam, perferendis quisquam ducimus assumenda quo
            accusantium perspiciatis quis hic asperiores. Provident, soluta rem!
            Sint, et minus exercitationem magni qui quia debitis repellendus
            nam? Aliquid, perferendis nulla! Sint reiciendis dicta laudantium
            dolorum, exercitationem omnis eaque doloremque aut laboriosam
            consequatur dolores rerum numquam totam natus nam quasi quae porro
            amet animi officia voluptates. Rerum maxime iusto temporibus tempora
            veritatis.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
