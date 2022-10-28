import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
  const { image_url, title, details, _id } = category;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Download</button>
          <Link to={`/course/${_id}`}>
            <button className="btn btn-primary">Check Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
