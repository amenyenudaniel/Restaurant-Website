import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./pages/BlogPage/BlogPage";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BlogPage/:id" element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
