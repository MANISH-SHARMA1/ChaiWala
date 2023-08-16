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
import TermsConditions from "./components/QuickLinks/Terms&Condition/TermsConditions";
import PrivacyPolicy from "./components/QuickLinks/privacyPolicy/PrivacyPolicy";
import Shipping from "./components/QuickLinks/shipping/Shipping";
import Cancellation from "./components/QuickLinks/cancellation/Cancellation";
import FAQs from "./components/QuickLinks/FAQs/FAQs";
import Product from "./pages/i-Tea/Components/product/Product";
import EnquiryForm from "./pages/ContactUs/EnquiryForm/EnquiryForm";
import IndiaChai from "./pages/Blog/IndiaChai/IndiaChai";
import SippingChai from "./pages/Blog/SippingChai/SippingChai";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/venture" element={<Venture />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/i_tea" element={<ITea />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/cancellationRefund" element={<Cancellation />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/for-enquiry" element={<EnquiryForm />} />
          <Route path="/IndiaChai" element={<IndiaChai />} />
          <Route path="/SippingChai" element={<SippingChai />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
