import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import Productss from "./components/NewItems/Products"
import CarouselItem from "./components/Carousel/CarouselItem"
import SignIn from "./components/SingIn/SignIn";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import Home from "./pages/Home/Home"

function App() {


  return (
   <>
   <Routes>
          
          <Route exact path="/h" element={<SignIn />} />
          </Routes>

   <Navbar/>
   <Home />
 <MainCarousel />
   <Productss/>
   <CarouselItem />

   <Products />
  <Footer/>
   </>
  )
}

export default App
