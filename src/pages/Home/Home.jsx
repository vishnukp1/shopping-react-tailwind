import CheckOut from "../../components/shopping/CheckOut"
import CheckOutItems from "../../components/shopping/CheckOutItems"
import Navbar from "../../components/shopping/Navbar"
import ShoppingContainer from "../../components/shopping/ShoppingContainer"
import ShoppingItems from "../../components/shopping/ShoppingItems"
import { items } from "../../data/CartItems"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <ShoppingContainer item={items}/>
        <CheckOutItems cartItem={items} />
        
        <ShoppingItems item={items} />
    </div>
  )
}

export default Home
