import React from "react";
import Link from "next/link";

const NavMenu = () => {
  return (
    <>
      <div className="flex ">
        <div className="bg-base-100 fixed top-0 w-7/9 h-screen flex flex-col select-none z-10 ">
          <div className="flex flex-col h-full text-5xl">
            <div className=" w-full p-3 border-b-2">Duck Season</div>
            <Link href={{ pathname: "/" }} className=" m-1  w-full p-3">
              Home
            </Link>
            <Link
              href={{ pathname: "/about" }}
              className=" m-1  w-full p-3 "
            >
              About
            </Link>
            <Link
              href={{ pathname: "/store" }}
              className=" m-1  w-full p-3"
            >
              Store &gt;
              <ul className="text-3xl">
                <li className="m-4">Category 1</li>
                <li className="m-4">Category 2</li>
                <li className="m-4">Category 3</li>

              </ul>
            </Link>
            <Link
              href={{ pathname: "/contact" }}
              className=" m-1  w-full p-3"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
