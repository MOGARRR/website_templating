import React from "react";
import Image from "next/image";
import StoreItemListing from "@/app/components/StoreItemListing";
import Directory from "@/app/components/Directory";


const productPage = () => {
  return (
    <div className="py-15 bg-slate-500">
      <Directory routeLink="/store" routeName="Store"/>
      <StoreItemListing
      image="/images/Gallery-Duck-1.jpg"
      imageAlt="Rubber duck"
      name='duck'
      price={9.99}
      description="coolest duck in the world, and thats a fact"
      />
     
    </div>
  );
};

export default productPage;