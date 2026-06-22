import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ContactSales from "./pages/ContactSales";
import ProductDetail from "./pages/ProductDetail";
import PageTransition from "./components/PageTransition";
import VisionApplications from "./pages/VisionApplications";
import History from "./pages/History";
import AllProducts from "./pages/AllProducts";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/applications/vision" element={<VisionApplications />} />
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/applications" element={<PageTransition><Applications /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactSales /></PageTransition>} />
        <Route path="/products/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/history" element={<PageTransition><History /></PageTransition>} />
        <Route path="/all-products" element={<PageTransition><AllProducts /></PageTransition>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
