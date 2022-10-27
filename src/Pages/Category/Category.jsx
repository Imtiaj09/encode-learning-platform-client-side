import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div>
      <h4>This Category has course: </h4>
    </div>
  );
};

export default Category;
