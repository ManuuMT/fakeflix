import React from "react";
import "./styles/Category.scss";
export interface CategoryInterface {}

const Category: React.FC<CategoryInterface> = () => {
  return <div className="category">Category</div>;
};

export default Category;
