import React from "react";
import { useParams } from "react-router-dom";
import News from "./News";
import NewsBanner from "./NewsBanner";

const Category = () => {
  const { category } = useParams();

   
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h1>
      <NewsBanner />
      <News category={category} />
    </div>
  );
};

export default Category;
