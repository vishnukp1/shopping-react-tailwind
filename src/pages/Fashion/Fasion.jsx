import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ShoppingItems from "../../components/shopping/ShoppingItems";
import { items } from "../../data/Fasion";

const Fasion = () => {
  return (
    <div>
      <Navbar />
      <ShoppingItems item={items} />
      <Footer />
    </div>
  );
};

export default Fasion;
