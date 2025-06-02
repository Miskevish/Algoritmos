import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Paradigmas from "./pages/Paradigmas";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paradigmas" element={<Paradigmas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
