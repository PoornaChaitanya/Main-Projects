import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300"
    >
      {/* Image Container */}
      <div className="overflow-hidden rounded-t-xl bg-gray-100">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-gray-600 truncate">{name}</p>

        <p className="mt-2 text-lg font-semibold text-gray-900">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
