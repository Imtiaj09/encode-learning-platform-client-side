import React from "react";
import { FaDownload, FaLongArrowAltRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

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
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn btn-primary">
                <FaDownload />
              </button>
            )}
          </Pdf>
          <Link to={`/course/${_id}`}>
            <button className="btn btn-primary">
              Check Out
              <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
