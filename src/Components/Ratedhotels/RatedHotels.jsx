import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./ratedhotels.css";

const HighRatedHotels = () => {
  const { data, loading, error } = useFetch(
    "https://fsdbookingbackend-2.onrender.com/api/hotels?featured=false&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "loading ...Please wait for a while ⌛️"
      ) : (
        <>
          {data.map((item) => (
            <Link to={`/hotels/${item._id}`} key={item._id} className="fpItem">
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              <button>{item.rating}</button>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default HighRatedHotels;
