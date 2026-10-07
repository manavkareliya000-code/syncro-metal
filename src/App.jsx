import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

import Hero from "./sections/Hero/Hero";
import StatsStrip from "./sections/StatsStrip/StatsStrip";
import AboutIntro from "./sections/AboutIntro/AboutIntro";
import ProductRange from "./sections/ProductRange/ProductRange";

import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutIntro />
      <ProductRange />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-syncro-bg">

      <ScrollToTop />
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;