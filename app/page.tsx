import Image from "next/image";
import coverPhoto from "../public/StockCake-Floating-Rubber.jpg";
import heroPhoto from "../public/Classy-Rubber-Hat-Duck.jpeg";
import galleryDuck1 from "../public/Gallery-Duck-1.jpg";
import galleryDuck2 from "../public/Gallery-Duck-2.jpg";
import galleryDuck3 from "../public/Gallery-Duck-3.jpg";

export default function Home() {
  return (
    <div className="">
      {/* ///HERO/// */}
      <div className="text-center relative w-screen h-[95vh] border-b-2 border-slate ">
        <Image
          className="w-screen object-cover blur-[3px]"
          src={coverPhoto}
          alt=""
          fill
        />
        <div className="text-5xl absolute inset-x-0 bottom-70 z-0 flex flex-col justify-between text-white">
          <h1>It's</h1>
          <h1>Duck</h1>
          <h1>Season!</h1>
          <button className=" text-2xl text-white btn btn-neutral btn-outline m-5 rounded-sm border-white">
            Shop
          </button>
        </div>
      </div>
      {/* Our Mission */}
      <div className="bg-slate-500 p-4 border-b-2 border-slate ">
        <h1 className="text-4xl m-5 border-b-2 pb-4">About Duck Season</h1>
        <h2 className="text-2xl mb-4">Ducks with Style</h2>
        <p className="text-xl text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, distinctio odio. Aperiam illum laboriosam mollitia
          dolore nostrum saepe nesciunt voluptatum adipisci impedit quam
          reiciendis, magni fuga consequatur maiores accusantium illo? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Sunt consectetur
          saepe a! Architecto perspiciatis, ratione nam enim voluptate debitis
          dolor aut sunt rerum. Nulla maiores ut similique officiis repudiandae
          adipisci.
        </p>
      </div>
      {/* ///SERVICES/PRODUCT/// */}
      <div className="bg-slate-500 border-b-2 border-slate ">
        <div>
          <Image className=" " src={heroPhoto} alt="" />
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
      {/* ///Gallery/// */}
      <div className="bg-gray-600  p-6 ">
        <h1 className="text-4xl pb-4">Gallery</h1>
        <h2 className="text-l mb-4">Explore Duck Fashion</h2>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, distinctio odio. Aperiam illum laboriosam mollitia
          dolore nostrum saepe nesciunt voluptatum adipisci impedit quam
          reiciendis, magni fuga consequatur maiores accusantium illo?
        </p>
      </div>
      <div className="bg-gray-600 border-b-2 border-slate">
        <div className="text-center relative h-[30vh] mr-4 ">
          <Image
            className="w-1/3 object-cover"
            src={galleryDuck1}
            alt=""
            fill
          />
        </div>
        <h2 className="text-xl p-4 ">Ducks for every season</h2>
        <p className="text-l px-4 mb-6">
          Aperiam illum laboriosam mollitia dolore nostrum saepe nesciunt
          voluptatum adipisci impedit quam reiciendis, magni fuga consequatur
          maiores accusantium illo?
        </p>
        {/* ////////////////////////////////////// */}
        <div className="text-center relative h-[30vh] ml-4 ">
          <Image
            className="w-1/3 object-cover"
            src={galleryDuck2}
            alt=""
            fill
          />
        </div>
        <h2 className="text-xl p-4 ">Laid back Ducks</h2>
        <p className="text-l px-4 mb-6">
          Aperiam illum laboriosam mollitia dolore nostrum saepe nesciunt
          voluptatum adipisci impedit quam reiciendis, magni fuga consequatur
          maiores accusantium illo?
        </p>
        {/* ////////////////////////////////////// */}
        <div className="text-center relative h-[30vh] mr-4 ">
          <Image
            className="w-1/3 object-cover"
            src={galleryDuck3}
            alt=""
            fill
          />
        </div>
        <h2 className="text-xl p-4 ">Ducks from around the world</h2>
        <p className="text-l px-4 mb-6">
          Aperiam illum laboriosam mollitia dolore nostrum saepe nesciunt
          voluptatum adipisci impedit quam reiciendis, magni fuga consequatur
          maiores accusantium illo?
        </p>
      </div>
      {/* ///CONTACT INFO & HOURS///  */}
      <div className="bg-slate-500 p-4 border-b-2 border-slate text-center place-items-center">
        <h1 className="text-5xl m-5 border-b-2 pb-4 ">Contact</h1>
        <h2 className="text-2xl mb-4">Get in touch</h2>
        <fieldset className="fieldset  rounded-box w-xs border p-4 text-xl">
          <label className="label">Name*</label>
          <input type="text" className="input" />

          <label className="label">Email*</label>
          <input type="email" className="input" />

          <label className="label">Subject*</label>
          <input type="text" className="input" />

          <label className="label">Message*</label>
          <textarea className="textarea" placeholder=""></textarea>
          <button className=" text-xl text-white btn btn-neutral btn-outline m-5 rounded-sm border-white">
            Send
          </button>
        </fieldset>
      </div>
    </div>
  );
}
