import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import PageTransition from "./components/PageTransition";
import VisionApplications from "./pages/VisionApplications";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/applications/vision" element={<VisionApplications />} />
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/applications" element={<PageTransition><Applications /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/products/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
      </Routes>
    </BrowserRouter>
  );
}
