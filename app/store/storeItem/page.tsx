import React from "react";
import Image from "next/image";

const productPage = () => {
  return (
    <div className="py-15 bg-slate-500">
      <div className="flex m-5 text-xl">
        <a href="" className="pr-1">
          {" "}
          &lt; Back to All Products
        </a>
      </div>

      <div className="bg-base-100 w-5/6 shadow-sm m-8 h-[30vh] ">
        <img src="/images/Gallery-Duck-1.jpg" alt="Rubber Duck" />
      </div>
      <div className="m-4 p-5">
        <h1 className="text-4xl">Duck name here</h1>
        <h2 className="text-xl">$9.99</h2>
      </div>
      <div className="m-8 p-4">
        <h1 className="text-2xl mb-2">Quanity *</h1>
        <div className="border-2 w-1/4 flex text-xl justify-evenly ">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <div className="mt-4">
          <button className=" text-2xl text-white btn btn-neutral btn-outline rounded-xl border-white w-full m-1">
            Add to Cart
          </button>
          <button className="text-2xl text-white bg-slate-800 btn btn-neutral btn-outline rounded-xl border-white w-full m-1">
            Buy Now
          </button>
        </div>
        <div className="mt-8 ">
          <h1 className="text-2xl border-b-2 mb-2">Product Description</h1>
          <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta et recusandae veniam neque natus commodi praesentium, doloremque voluptas, beatae quidem, pariatur voluptate fuga omnis at sequi deleniti perspiciatis maxime.</p>
        </div>
      </div>
    </div>
  );
};

export default productPage;
