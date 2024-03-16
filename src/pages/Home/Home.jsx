import Footer from "../../components/Footer/Footer";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Productss from "../../components/NewItems/Products";
import Products from "../../components/Products/Products";
import CarouselItem from "../../components/Carousel/CarouselItem";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainCarousel />
      <Productss />
      <CarouselItem />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
