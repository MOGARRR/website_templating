import React, { useState } from "react";
interface CartProps {
  active: boolean;
}

const Cart: React.FC<CartProps> = ({ active }) => {
  const [display, setDisplay] = useState(active);

  const handleDisplay = () => setDisplay(false);
  return (
    <>
      {display && (
        <div className="bg-base-100 fixed top-15 w-screen  flex flex-col select-none z-10 border-b-2">
          <div className=" p-4 flex flex-col">
            <div className="flex justify-between text-2xl border-b-2 p-1">
              <h1>Order</h1>
              <h1 className="text-lg">Edit Cart</h1>
            </div>
            <div>items</div>
            <div className="p-4">
              <div className="flex justify-between">
                <h1 className="text-xl">Subtotal</h1>
                <h1>10.00</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl mt-2">Shipping</h1>
                <h1>10.00</h1>
              </div>
              <div className="flex justify-between mt-4 text-xl">
                <h1 className="text-2xl">Total</h1>
                <h1>10.00</h1>
              </div>
            </div>
            <button className="text-xl text-white btn btn-neutral btn-outline rounded-sm border-white ">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
