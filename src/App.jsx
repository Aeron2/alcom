import { AboutUs, Hero, Homepage, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="font-public">
      <Router>
         <Navbar /> Navbar rendered outside the Routes component
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}
