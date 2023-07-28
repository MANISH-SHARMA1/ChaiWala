import { Route, Routes } from "react-router";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Venture from "./pages/Venture/Venture";
import Gallery from "./pages/Gallery/Gallery";
import Enquiry from "./pages/Enquiry/Enquiry";
import Career from "./pages/Careers/Career";
import ITea from "./pages/i-Tea/ITea";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/venture" element={<Venture/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
          <Route path="/careers" element={<Career/>}/>
          <Route path="/i_tea" element={<ITea/>}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
