import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Porsche from "../components/Porsche.mp4";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

import porh from "../components/porh.mp4";

export default function Home() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState([]);
  const [item, setItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/pdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setItem(response[0]);
    setCat(response[1]);

    // console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-caption w-50  " style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  className="btn btn-dark btn-outline-dark text-white  "
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="carousel-item active ">
              <div className="video ">
                <Link to="https://dealer.porsche.com/in/india/">
                  <video
                    className="videoTag"
                    autoPlay
                    loop
                    muted
                    height={820}
                    width={1878}
                  >
                    <source src={Porsche} type="video/mp4" />
                  </video>
                  <div className="content text-white ">
                    <h1> Porsche India.</h1>
                    <p>Know of our Porsche Centre network in India.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <div className="video  ">
                <Link to="https://dealer.porsche.com/in/india/">
                  <video
                    className="videoTag"
                    autoPlay
                    loop
                    muted
                    height={820}
                    width={1878}
                  >
                    <source src={porh} type="video/mp4" />
                  </video>
                  <div className="content text-white ">
                    <h1> Porsche India.</h1>
                    <p>Know of our Porsche Centre network in India.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {cat?.length !== 0
          ? cat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3 fw-bold">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {item?.length !== 0 ? (
                    item
                      .filter(
                        (ditem) => (ditem.CategoryName === data.CategoryName) && (ditem.name.toLowerCase().includes(search.toLocaleLowerCase()))
                      ) 
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-4"
                          >
                            <Cards
                                   item={filterItems}                                            //fName={filterItems.name}
                              options={filterItems.options[0]}
                                                                                //imgSrc={filterItems.img}
                                                                                //desc={filterItems.description}
                            >
                              {" "}
                            </Cards>
                          </div>
                        );
                      })
                  ) : (
                    <div> No Such Data Found </div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
