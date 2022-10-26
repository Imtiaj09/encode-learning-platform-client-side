import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideCategoryNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4 className="text-2xl">This All category: {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p className="text-base mt-4" key={category.id}>
            <Link to={`/courseCategory/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideCategoryNav;
