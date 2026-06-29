import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";


function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/applications/vision" element={<PageTransition><VisionApplications /></PageTransition>} />
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/applications" element={<PageTransition><Applications /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactSales /></PageTransition>} />
          <Route path="/products/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
          <Route path="/history" element={<PageTransition><History /></PageTransition>} />
          <Route path="/all-products" element={<PageTransition><AllProducts /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
