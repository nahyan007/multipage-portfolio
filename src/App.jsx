import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Themes from "./components/Themes";
import Navbar from "./components/Navbar";
import { Home, About, Portfolio, Contact } from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home  />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
