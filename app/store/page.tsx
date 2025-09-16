import React from "react";

const storePage = () => {
  return (
    <div className="pt-15 bg-slate-500">
      <div>
        <div className="flex m-5 text-xl">
          <a href="" className="pr-1">
            Home
          </a>
          <div> &gt; Store</div>
        </div>
        <div className="text-center p-8 ">
          <h1 className="text-5xl mb-8 border-b-2">Our Duck Collection</h1>
          <h2 className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            beatae dolore pariatur sed dolores odio laudantium error enim rem!
            Cupiditate culpa ex eveniet voluptas sint nam nemo quaerat,
            architecto aliquid!
          </h2>
        </div>

        <div className="p-8">
          <h1 className="text-3xl mb-5"> All Products</h1>
          <div className="flex justify-between">
            <h2 className="text-xl">5 Products</h2>
            <h2 className="text-xl underline">Filter & Sort</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center justify-evenly m-8  ">
        {/* ///////////////////////// */}
        <div className="card bg-base-100 w-5/6 shadow-sm m-4 h-[30vh] ">
          <figure>
            <img src="/images/Gallery-Duck-1.jpg" alt="Rubber Duck" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Duck Name Here</h2>
            <h3 className="text-xl">$9.99</h3>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className="card bg-base-100 w-5/6 shadow-sm m-4 h-[30vh]">
          <figure>
            <img src="/images/Gallery-Duck-2.jpg" alt="Rubber Duck" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Duck Name Here</h2>
            <h3 className="text-xl">$9.99</h3>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className="card bg-base-100 w-5/6 shadow-sm m-4 h-[30vh]">
          <figure>
            <img src="/images/Gallery-Duck-3.jpg" alt="Rubber Duck" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Duck Name Here</h2>
            <h3 className="text-xl">$9.99</h3>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className="card bg-base-100 w-5/6 shadow-sm m-4 h-[30vh]">
          <figure>
            <img
              src="/images/StockCake-Floating-Rubber.jpg"
              alt="Rubber Duck"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Duck Name Here</h2>
            <h3 className="text-xl">$9.99</h3>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className="card bg-base-100 w-5/6 shadow-sm m-4 h-[30vh]">
          <figure>
            <img src="/images/Classy-Rubber-Hat-Duck.jpeg" alt="Rubber Duck" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Duck Name Here</h2>
            <h3 className="text-xl">$9.99</h3>
          </div>
        </div>
        {/* ///////////////////////// */}
      </div>
    </div>
  );
};

export default storePage;
