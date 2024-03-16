import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShoppingItems from "../../components/shopping/ShoppingItems";
import { items } from "../../data/BabyProduct";

const BabyProducts = () => {
  return (
    <div>
      <Navbar />
      <ShoppingItems item={items} />
      <Footer />
    </div>
  );
};

export default BabyProducts;
