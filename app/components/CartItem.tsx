import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between">
      <div className="flex ">
        <img
          className="w-2/4 h-20 mr-2 border-2"
          src="/images/Gallery-Duck-3.jpg"
          alt=""
        />
        <h1 className=" text-xl">Duck name</h1>
      </div>
      <div className="flex justify-between w-1/2 text-center text-xl">
        <div className="flex">
          <span className="h-8 w-7 m-1 text-3xl ">-</span>
          <span className="h-8 w-7 m-1  border-2">1</span>
          <span className="h-8 w-7 m-1 text-3xl">+</span>
        </div>
        <h1 className="m-1">$10.00</h1>
      </div>
    </div>
  );
};

export default CartItem;
