import "./App.css";

import Home from "./assets/Home";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Event from "./assets/Event";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/event">Event</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event" element={<Event />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;