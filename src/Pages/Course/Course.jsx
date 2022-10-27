import React from "react";
import Category from "../Category/Category";
import LeftSideCategoryNav from "../Shared/LeftSideCategoryNav/LeftSideCategoryNav";

const Course = () => {
  return (
    <div className="flex">
      <div className="w-full lg:w-1/4">
        <LeftSideCategoryNav></LeftSideCategoryNav>
      </div>
      <div className="w-full lg:w-3/4">
        <Category></Category>
      </div>
    </div>
  );
};

export default Course;
