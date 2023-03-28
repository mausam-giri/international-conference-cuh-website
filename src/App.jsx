import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallForPapers from "./pages/CallForPapers";
import NotFound from "./pages/404";
import ContactUs from "./pages/ContactUs";
import ComLayout from "./pages/committee/ComLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/advisory-committee" element={<ComLayout/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
