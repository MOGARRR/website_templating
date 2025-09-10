import Image, { StaticImageData } from "next/image";
import React from 'react'

interface servicesProductsProps {
  image : StaticImageData;
  imageAlt: string;
}

const ServicesProducts: React.FC<servicesProductsProps> = ({image, imageAlt}) => {
  return (
     <div className="bg-slate-500 border-b-2 border-slate ">
        <div>
          <Image className=" " src={image} alt={imageAlt} />
        </div>
        <h1 className="text-4xl m-10 border-b-2 ">Producks</h1>
        <div className="carousel rounded-box">
          <div className="carousel-item ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger"
            />
          </div>
        </div>
      </div>
  )
}

export default ServicesProducts