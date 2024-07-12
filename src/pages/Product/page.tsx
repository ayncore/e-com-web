import React from "react";
import Productdetails from "./Productdetails";

const Product = () => {
  return (
    <div className="font-sans">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <Productdetails />
        </div>
      </div>
    </div>
  );
};

export default Product;
