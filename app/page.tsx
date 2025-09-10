import coverPhoto from "../public/images/StockCake-Floating-Rubber.jpg";
import heroPhoto from "../public/images/Classy-Rubber-Hat-Duck.jpeg";
import Hero from "./components/Hero";
import MissionStatement from "./components/MissionStatement";
import ServicesProducts from "./components/ServicesProducts";
import Contact from "./components/Contact";
import GalleryList from "./components/GalleryList";

export default function Home() {
  return (
    <div className="">
      {/* ///HERO/// */}
      <Hero image={coverPhoto} imageAlt="Rubber duck floating in water" />
      {/* Our Mission */}
      <MissionStatement />
      {/* ///SERVICES/PRODUCT/// */}
      <ServicesProducts
        image={heroPhoto}
        imageAlt="Rubber duck with hat and glasses floating in a pool"
      />
      {/* ///Gallery/// */}
      <GalleryList />
      {/* ///CONTACT INFO & HOURS///  */}
      <Contact />
    </div>
  );
}
