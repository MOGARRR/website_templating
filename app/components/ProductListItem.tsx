import React from "react";
import Image from "next/image";

interface ProductListItemProps {
  image: string;
  imageAlt: string;
  name: string;
  price: number;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  image,
  imageAlt,
  name,
  price,
}) => {
  return (
    <div className="card bg-base-100 w-5/6 shadow-sm m-4 h-[30vh] ">
      <figure>
        <img src={image} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{name}</h2>
        <h3 className="text-xl">${price}</h3>
      </div>
    </div>
  );
};

export default ProductListItem;
