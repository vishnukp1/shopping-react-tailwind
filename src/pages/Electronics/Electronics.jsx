import ShoppingItems from '../../components/shopping/ShoppingItems'
import Navbar from '../../components/Navbar/Navbar'
import { items } from '../../data/CartItems'
import Footer from '../../components/Footer/Footer'

const Electronics = () => {
  return (
    <div>
         <Navbar />
        <ShoppingItems item={items} />
        <Footer />
    </div>
  )
}

export default Electronics