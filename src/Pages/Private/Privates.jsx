import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Privates = () => {
  const course = useLoaderData();
  const { image_url, title, details, _id } = course;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      {/* <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div> */}
    </div>
  );
};

export default Privates;
