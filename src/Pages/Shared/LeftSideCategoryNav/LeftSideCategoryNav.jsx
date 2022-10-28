import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import Category from "../../Category/Category";

const LeftSideCategoryNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className=" grid lg:grid-cols-[2fr_5fr] border ">
      <div>
        <h4 className="text-2xl">This All category: {categories.length}</h4>
        <div>
          {categories.map((category) => (
            <p className="text-base mt-4" key={category.id}>
              <Link to={`/category/${category.id}`}>{category.title}</Link>
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {categories.map((category) => (
          <Card key={category.id} category={category}></Card>
        ))}
      </div>
    </div>
  );
};

export default LeftSideCategoryNav;
