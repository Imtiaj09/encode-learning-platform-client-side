import React from "react";
import { Link } from "react-router-dom";

const Card = ({ category }) => {
  console.log(category);
  return (
    <div className="">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={category.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.title}</h2>
        </div>
      </div>
      <Link to={`/singleCourse/${category._id}`}>
        <button className="bg-red-500 ">Detail</button>
      </Link>
    </div>
  );
};

export default Card;
